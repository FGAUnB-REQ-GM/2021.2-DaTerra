FROM python:3.8

# Configure Virtual Environment
ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /usr/src/daterra
COPY . .

RUN pip install --upgrade pip && pip install -r requirements.txt

CMD ["./daterra/entrypoint.sh"]