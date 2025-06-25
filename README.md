
Built by https://www.blackbox.ai

---

# Hat.sh Clone - Client-side File Encryption

## Project Overview
Hat.sh Clone is a lightweight web application for simple, fast, and secure client-side file encryption. Users can encrypt and decrypt files directly in their browser without uploading them to any server, ensuring privacy and security.

## Installation
To get started with this project, you can clone the repository and open the `index.html` file in your web browser.

```bash
git clone <repository-url>
cd hat-sh-clone
open index.html
```

Make sure you have an internet connection to load the external dependencies.

## Usage
1. Open the `index.html` file in your browser.
2. Use the tabs to switch between the encryption and decryption interfaces.
3. Follow the on-screen instructions to encrypt or decrypt your files.
4. For encryption:
   - Drag and drop files or click the "Browse Files" button to select files.
   - Enter a password for the encryption.
   - Download the encrypted files.
5. For decryption:
   - Choose the encrypted files.
   - Enter the password used during encryption.
   - Download the decrypted files.

## Features
- Simple and user-friendly interface for file encryption and decryption.
- Supports drag-and-drop file selection.
- All operations are performed locally in the browser.
- Utilizes password-based encryption for security.
- Responsive design for use on different devices.

## Dependencies
The project includes the following dependencies specified in the HTML file:
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
- Google Fonts - Used for typography (`Inter` font family).

No additional JavaScript libraries are required as the application relies on plain JavaScript for functionality.

## Project Structure
```
hat-sh-clone/
├── index.html       # Main HTML file with the application layout
├── main.js          # JavaScript file handling the encryption/decryption logic
├── styles.css       # Custom styles for the application
```

### Explanation of Key Files:
- **index.html**: Contains the HTML structure for the application, including the encryption and decryption UI elements.
- **main.js**: Implements the functionality for file selection, tab switching, encryption logic, and file download interactions.
- **styles.css**: Defines custom styles and transitions for a better user experience.

## Contributing
Contributions are welcome! Feel free to submit issues, suggestions, or pull requests to enhance this project.

## License
This project is open-source. You can use it and modify it under the terms of the MIT License.

---

Built and developed by [sh-dv](https://github.com/sh-dv/hat).