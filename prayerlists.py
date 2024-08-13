# Define the input and output file names
input_file = 'outputin.txt'
output_file = 'output.txt'

# Open the input file for reading and output file for writing
with open(input_file, 'r') as infile, open(output_file, 'w') as outfile:
    # Read each line from the input file
    for line in infile:
        # Strip the newline character, add the quotes, and add a comma
        new_line = f'"{line.strip()}",'
        # Write the modified line to the output file
        outfile.write(new_line + '\n')

print(f'Processed lines have been saved to {output_file}')
