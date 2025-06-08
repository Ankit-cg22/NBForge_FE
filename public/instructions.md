Welcome to **NBForge**! This web application allows you to convert your Jupyter Notebook (`.ipynb`) files into structured Python projects, Streamlit apps, or FastAPI apps. You will receive the generated project as a downloadable ZIP file.

---

## How to Use the Webapp

1. **Upload Your Notebook**
   - Click the upload button and select your `.ipynb` file.
   - The file will be processed and converted into a Python project.

2. **Download the Result**
   - Once the conversion is complete, a ZIP file containing your new Python project will be available for download.

---

## Generating Different Project Types

NBForge can generate three types of projects from your notebook:

### 1. Standard Python Module (Default)
- If your notebook does **not** contain any special description blocks, NBForge will create a standard Python module, organizing your code and markdown into a clean project structure.

### 2. Streamlit App
- To generate a Streamlit app, add a **Markdown cell** in your notebook with the header:
  ```
  # NBForge_Streamlit
  ```
- You can include a description or instructions for the Streamlit app in this cell.
- If there are multiple such cells, NBForge will use the **latest one**.
- NBForge will automatically detect this and generate a Streamlit app as part of your project.

### 3. FastAPI App
- To generate a FastAPI app, add a **Markdown cell** in your notebook with the header:
  ```
  # NBForge_FastAPI
  ```
- You can include a description or API details in this cell.
- NBForge will detect this and generate a FastAPI app as part of your project.
