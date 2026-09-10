# SQLAlchemy alternative

This is a separate runnable copy of app. Existing files are untouched.
Models and Pydantic response schemas remain together in each feature file.

From music-service, with your virtual environment activated:

    python -m uvicorn app_sqlalchemy.main:app --reload

This reads the same music-service/.env and DATABASE_URL as the original.
Stop the original server first if it is using port 8000.
The SQL scripts still manage tables and triggers; this app does not create them.
Existing response fields, including timestamps and song year, are preserved.
