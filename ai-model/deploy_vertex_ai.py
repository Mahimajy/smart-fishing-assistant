from google.cloud import aiplatform
import os

PROJECT_ID = "your-gcp-project-id"
MODEL_NAME = "smart-fish-predictor"

aiplatform.init(project=PROJECT_ID)

model = aiplatform.Model.upload(
    display_name=MODEL_NAME,
    artifact_uri="gs://your-bucket-name/model-path",
    serving_container_image_uri="gcr.io/cloud-aiplatform/prediction/tf2-cpu"
)

print(f"Model deployed: {model.resource_name}")
