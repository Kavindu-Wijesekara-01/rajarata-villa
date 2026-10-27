import os
import shutil

src_dir = os.path.join(os.path.dirname(__file__), 'images')
dest_dir = os.path.join(os.path.dirname(__file__), 'public', 'images')

os.makedirs(dest_dir, exist_ok=True)

if os.path.exists(src_dir):
    for filename in os.listdir(src_dir):
        src_path = os.path.join(src_dir, filename)
        dest_path = os.path.join(dest_dir, filename)
        if os.path.isfile(src_path):
            shutil.copy2(src_path, dest_path)
            print(f"Copied {filename} to {dest_dir}")
print("Assets copy complete.")
