import os
import re
import spacy
import pdfplumber
import sys
from collections import defaultdict

# Set stdout encoding to UTF-8 to avoid Unicode errors
sys.stdout.reconfigure(encoding='utf-8')

# Load spaCy NLP model
nlp = spacy.load("en_core_web_sm")

# Regex patterns
EMAIL_REGEX = r"[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+"
PHONE_REGEX = r"\+?\d{1,3}?[ -.]?\(?\d{2,4}\)?[ -.]?\d{3,4}[ -.]?\d{4}"


def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file."""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text.strip()


def extract_entities(text):
    """Extract relevant information from the resume text."""
    doc = nlp(text)
    extracted_info = defaultdict(str)

    # Extract email and phone using regex
    extracted_info["Email"] = ", ".join(re.findall(EMAIL_REGEX, text)) or "0"
    extracted_info["Phone"] = ", ".join(re.findall(PHONE_REGEX, text)) or "0"

    # Extract name (assuming first proper noun)
    extracted_info["Name"] = "0"
    for ent in doc.ents:
        if ent.label_ == "PERSON":
            extracted_info["Name"] = ent.text
            break

    # Extract job titles, education, and certifications dynamically
    extracted_info["Job Titles"] = []
    extracted_info["Education"] = []
    extracted_info["Certifications"] = []
    extracted_info["Projects"] = []
    extracted_info["Experience"] = "0"
    extracted_info["Skills"] = []
    
    for ent in doc.ents:
        if ent.label_ in ["ORG", "WORK_OF_ART"]:
            extracted_info["Certifications"].append(ent.text)
        elif ent.label_ in ["EDUCATION", "FACILITY", "ORG"]:
            extracted_info["Education"].append(ent.text)
        elif ent.label_ == "EVENT":
            extracted_info["Projects"].append(ent.text)
        elif ent.label_ in ["TITLE"]:
            extracted_info["Job Titles"].append(ent.text)
    
    for token in doc:
        if token.pos_ in ["NOUN", "PROPN"] and token.is_alpha and not token.is_stop:
            extracted_info["Skills"].append(token.text)
    
    extracted_info["Skills"] = list(set(extracted_info["Skills"])) or ["0"]  # Remove duplicates
    extracted_info["Job Titles"] = list(set(extracted_info["Job Titles"])) or ["0"]
    extracted_info["Education"] = list(set(extracted_info["Education"])) or ["0"]
    extracted_info["Certifications"] = list(set(extracted_info["Certifications"])) or ["0"]
    extracted_info["Projects"] = list(set(extracted_info["Projects"])) or ["0"]
    
    return extracted_info


def process_resume(pdf_path):
    """Process a single resume PDF and extract information."""
    text = extract_text_from_pdf(pdf_path)
    extracted_data = extract_entities(text)
    print(f"\033[92m✅ Processed: {pdf_path}\033[0m")  # Green check mark
    print(extracted_data)  # Print extracted information to terminal


if __name__ == "__main__":
    resume_path = "D:/Projects/personal/HireRight/resume.pdf"  # Change this
    process_resume(resume_path)
  