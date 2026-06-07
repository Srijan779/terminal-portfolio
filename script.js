// Grab pointers to essential layout objects
const cliInput = document.getElementById('cli-input');
const cliOutput = document.getElementById('cli-output');

// Automatically lock cursor focus to the terminal line when clicking anywhere on screen
document.addEventListener('click', function() {
    if (cliInput) cliInput.focus();
});

// Reusable function to handle display transitions
document.addEventListener('keydown', function(event) {
    // Check if user hit the Enter key
    if (event.target === cliInput && event.key === 'Enter') {
        
        let command = cliInput.value.toLowerCase().trim();
        cliInput.value = ''; // Clean the input field instantly

        // Added 'experience' validation to the registry array map
        if (command === 'home' || command === 'projects' || command === 'experience' || command === 'skills') {
            
            // 1. Hide all middle panels
            let panels = document.querySelectorAll('.tab-panel');
            panels.forEach(function(p) { p.classList.remove('active'); });

            // 2. Clear focus states from sidebar directory strings
            let labels = document.querySelectorAll('.dir-item');
            labels.forEach(function(l) { l.classList.remove('current'); });

            // 3. Secure pointers to target layout views safely
            let targetPanel = document.getElementById(command);
            let targetLabel = document.getElementById('lbl-' + command);

            if (targetPanel && targetLabel) {
                targetPanel.classList.add('active');
                targetLabel.classList.add('current');
                cliOutput.innerText = "Execution success: Loaded system registry '" + command + "'.";
            } else {
                cliOutput.innerText = "Error: System found matching keyword code but HTML nodes are missing.";
            }
        
        } else if (command === 'clear') {
            // Reset log display string
            cliOutput.innerText = "Console log buffer flushed cleanly.";
            
        } else {
            // Handle fault scenarios
            cliOutput.innerText = "Error: Routine '" + command + "' unrecognized. Try 'home', 'projects', 'experience', or 'skills'.";
        }
    }
});