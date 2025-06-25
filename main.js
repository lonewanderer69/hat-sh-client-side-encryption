// DOM elements for Encryption
const tabEncrypt = document.getElementById('tab-encrypt');
const tabDecrypt = document.getElementById('tab-decrypt');

const encryptionPanel = document.getElementById('encryption-panel');
const decryptionPanel = document.getElementById('decryption-panel');

// Encryption step elements
const fileDropArea = document.getElementById('file-drop-area');
const browseBtn = document.getElementById('browse-btn');
const fileInput = document.getElementById('file-input');
const nextBtn = document.getElementById('next-btn');
const step2 = document.getElementById('step-2');
const passwordInput = document.getElementById('password-input');
const step3 = document.getElementById('step-3');
const downloadBtn = document.getElementById('download-btn');

// Decryption step elements
const decryptFileDropArea = document.getElementById('decrypt-file-drop-area');
const decryptBrowseBtn = document.getElementById('decrypt-browse-btn');
const decryptFileInput = document.getElementById('decrypt-file-input');
const decryptNextBtn = document.getElementById('decrypt-next-btn');
const decryptStep2 = document.getElementById('decrypt-step-2');
const decryptPasswordInput = document.getElementById('decrypt-password-input');
const decryptStep3 = document.getElementById('decrypt-step-3');
const decryptDownloadBtn = document.getElementById('decrypt-download-btn');

let encryptionFiles = [];
let decryptionFiles = [];

// Utility to switch tabs
function switchTab(tab) {
  if (tab === 'encrypt') {
    tabEncrypt.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
    tabEncrypt.setAttribute('aria-selected', 'true');
    tabDecrypt.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
    tabDecrypt.classList.add('text-gray-600');
    tabDecrypt.setAttribute('aria-selected', 'false');
    encryptionPanel.classList.remove('hidden');
    decryptionPanel.classList.add('hidden');
  } else {
    tabDecrypt.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
    tabDecrypt.setAttribute('aria-selected', 'true');
    tabEncrypt.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
    tabEncrypt.classList.add('text-gray-600');
    tabEncrypt.setAttribute('aria-selected', 'false');
    decryptionPanel.classList.remove('hidden');
    encryptionPanel.classList.add('hidden');
  }
}

// Event listeners for tab buttons
tabEncrypt.addEventListener('click', () => switchTab('encrypt'));
tabDecrypt.addEventListener('click', () => switchTab('decrypt'));

// File input handlers for Encryption
browseBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
  encryptionFiles = Array.from(e.target.files);
  updateNextButton();
});

fileDropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileDropArea.classList.add('border-gray-600');
});
fileDropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  fileDropArea.classList.remove('border-gray-600');
});
fileDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  fileDropArea.classList.remove('border-gray-600');
  encryptionFiles = Array.from(e.dataTransfer.files);
  fileInput.files = e.dataTransfer.files;
  updateNextButton();
});

function updateNextButton() {
  if (encryptionFiles.length > 0) {
    nextBtn.disabled = false;
    nextBtn.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    nextBtn.classList.add('bg-gray-700', 'text-white', 'cursor-pointer');
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    nextBtn.classList.remove('bg-gray-700', 'text-white', 'cursor-pointer');
  }
}

// NEXT button click for Encryption
nextBtn.addEventListener('click', () => {
  if (encryptionFiles.length === 0) return;
  // Hide step 1, show step 2
  nextBtn.classList.add('hidden');
  fileDropArea.classList.add('hidden');
  step2.classList.remove('hidden');
  passwordInput.focus();
});

// Password input enter key to show step 3
passwordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && passwordInput.value.trim() !== '') {
    showEncryptionDownload();
  }
});

function showEncryptionDownload() {
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
}

// Download button click simulation for Encryption
downloadBtn.addEventListener('click', () => {
  alert('Simulated encryption and download of files.');
  resetEncryption();
});

function resetEncryption() {
  encryptionFiles = [];
  fileInput.value = '';
  nextBtn.disabled = true;
  nextBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
  nextBtn.classList.remove('bg-gray-700', 'text-white', 'cursor-pointer');
  nextBtn.classList.remove('hidden');
  fileDropArea.classList.remove('hidden');
  step2.classList.add('hidden');
  step3.classList.add('hidden');
  passwordInput.value = '';
}

// File input handlers for Decryption
decryptBrowseBtn.addEventListener('click', () => decryptFileInput.click());
decryptFileInput.addEventListener('change', (e) => {
  decryptionFiles = Array.from(e.target.files);
  updateDecryptNextButton();
});

decryptFileDropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  decryptFileDropArea.classList.add('border-gray-600');
});
decryptFileDropArea.addEventListener('dragleave', (e) => {
  e.preventDefault();
  decryptFileDropArea.classList.remove('border-gray-600');
});
decryptFileDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  decryptFileDropArea.classList.remove('border-gray-600');
  decryptionFiles = Array.from(e.dataTransfer.files);
  decryptFileInput.files = e.dataTransfer.files;
  updateDecryptNextButton();
});

function updateDecryptNextButton() {
  if (decryptionFiles.length > 0) {
    decryptNextBtn.disabled = false;
    decryptNextBtn.classList.remove('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    decryptNextBtn.classList.add('bg-gray-700', 'text-white', 'cursor-pointer');
  } else {
    decryptNextBtn.disabled = true;
    decryptNextBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
    decryptNextBtn.classList.remove('bg-gray-700', 'text-white', 'cursor-pointer');
  }
}

// NEXT button click for Decryption
decryptNextBtn.addEventListener('click', () => {
  if (decryptionFiles.length === 0) return;
  decryptNextBtn.classList.add('hidden');
  decryptFileDropArea.classList.add('hidden');
  decryptStep2.classList.remove('hidden');
  decryptPasswordInput.focus();
});

// Password input enter key to show step 3 for Decryption
decryptPasswordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && decryptPasswordInput.value.trim() !== '') {
    showDecryptionDownload();
  }
});

function showDecryptionDownload() {
  decryptStep2.classList.add('hidden');
  decryptStep3.classList.remove('hidden');
}

// Download button click simulation for Decryption
decryptDownloadBtn.addEventListener('click', () => {
  alert('Simulated decryption and download of files.');
  resetDecryption();
});

function resetDecryption() {
  decryptionFiles = [];
  decryptFileInput.value = '';
  decryptNextBtn.disabled = true;
  decryptNextBtn.classList.add('bg-gray-300', 'text-gray-500', 'cursor-not-allowed');
  decryptNextBtn.classList.remove('bg-gray-700', 'text-white', 'cursor-pointer');
  decryptNextBtn.classList.remove('hidden');
  decryptFileDropArea.classList.remove('hidden');
  decryptStep2.classList.add('hidden');
  decryptStep3.classList.add('hidden');
  decryptPasswordInput.value = '';
}

// Initialize
switchTab('encrypt');
</create_file>
