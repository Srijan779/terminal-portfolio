// Grab pointers to essential layout objects
const cliInput = document.getElementById('cli-input');
const cliOutput = document.getElementById('cli-output');

// Reusable function to handle display transitions
document.addEventListener('keydown', function(event) {
    // Check if user hit the Enter key
    if (event.target === cliInput && event.key === 'Enter') {
        
        let command = cliInput.value.toLowerCase().trim();
        cliInput.value = ''; // Clean the input field instantly

        // Command Validation Map
        if (command === 'home' || command === 'projects' || command === 'skills') {
            
            // 1. Hide all middle panels
            let panels = document.querySelectorAll('.tab-panel');
            panels.forEach(function(p) { p.classList.remove('active'); });

            // 2. Clear focus states from sidebar directory strings
            let labels = document.querySelectorAll('.dir-item');
            labels.forEach(function(l) { l.classList.remove('current'); });

            // 3. Mount active states to selected panel and label
            document.getElementById(command).classList.add('active');
            document.getElementById('lbl-' + command).classList.add('current');

            cliOutput.innerText = "Execution success: Loaded system registry '" + command + "'.";
        
        } else if (command === 'clear') {
            // Reset log display string
            cliOutput.innerText = "Console log buffer flushed cleanly.";
            
        } else {
            // Handle fault scenarios
            cliOutput.innerText = "Error: Routine '" + command + "' unrecognized. Try 'home', 'projects', or 'skills'.";
        }
    }
});