# Deploys the "out" folder from Next.JS onto a google cloud bucket
# To use, make sure you install the google-cloud-storage and oauth2client libraries through pip!
# Also, make sure you put your service account json key from Google Cloud Console in this folder with the name creds.json
from google.cloud import storage
from google.oauth2 import service_account
import os
import glob

# Creates a google cloud storage client
cwd = os.getcwd()
path = cwd + "\\creds.json"
scope = ["https://www.googleapis.com/auth/cloud-platform"]
credentials = service_account.Credentials.from_service_account_file(path, scopes=scope)
client = storage.Client(credentials=credentials, project=credentials.project_id)

# Connects to the specific bucket you want
bucket = client.get_bucket("www.calculatorsforacause.org")

# Gets all of the blobs in the bucket
blobs = list(bucket.list_blobs())

# Loops through every blob and deletes it
for blob in blobs:
  blob_name = str(blob.name)
  try:
    bucket.delete_blob(blob_name)
    print("Deleted blob: " + blob_name)
  except:
    print("Failed while deleting blob: " + blob_name)

# Uploads all of the files from the out folder using a recursive function
local_path = os.path.dirname(cwd) + "\\out"
gcs_path = ""
def upload_local_directory_to_gcs(local_path, bucket, gcs_path):
    file_count = 0
    file_separator = "" if gcs_path == "" else "/"
    # Checks to make sure that our directory actually exists
    assert os.path.isdir(local_path)
    # Loops through each file in local_path and uploads it
    for local_file in glob.glob(local_path + '/**'):
      # Recursively run the function if the file we are uploading is a folder
      if not os.path.isfile(local_file):
        file_count += upload_local_directory_to_gcs(local_file, bucket, gcs_path + file_separator + os.path.basename(local_file))
      # Otherwise just upload the file in a blob
      else:
        # Creates a remote path: the path in the google bucket that the file will be uploaded to
        remote_path = gcs_path + file_separator + local_file[1 + len(local_path):]
        # Creates a new blob in the location that we created above
        blob = bucket.blob(remote_path)
        # Uploads a file to this blob
        blob.upload_from_filename(local_file)
        # Increments the file count indicator
        file_count += 1
    return file_count
try:
  file_count = upload_local_directory_to_gcs(local_path, bucket, gcs_path)
  print("Successfully uploaded " + str(file_count) + " files!")
except Exception as e:
  print("Something went wrong while uploading files!")
  print(e)