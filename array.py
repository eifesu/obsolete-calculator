import json

def convert_to_json(file_path):
    # Read the file and store unique lines in a set
    unique_lines = set()
    with open(file_path, 'r') as file:
        for line in file:
            unique_lines.add(line.strip())

    # Sort the unique lines alphabetically
    sorted_lines = sorted(unique_lines)

    # Convert the list to a JSON array
    json_array = json.dumps(sorted_lines)

    # Write the JSON array to a file
    with open('jobs.json', 'w') as file:
        file.write(json_array)

# Provide the path to your text file
file_path = 'jobs.txt'

# Convert the list to a JSON array
convert_to_json(file_path)
