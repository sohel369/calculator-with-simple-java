// alert('hi')

/* Hello */

document.addEventListener("DOMContentLoaded", function() {
    const speakButton = document.querySelectorAll('[type="button"]');

    // Check if the SpeechSynthesis API is available in the browser
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;

        // Function to speak the given text
        function speakText(text) {
            const utterance = new SpeechSynthesisUtterance(text);
            synth.speak(utterance);
        }

        // Add a click event listener to the button
        speakButton.forEach(v => {
            v.addEventListener("click", function() {
                // 3 variable var, let, const
                let get_value = v.getAttribute('value')
                speakText(get_value);
            });
        })

    } else {
        // SpeechSynthesis API is not supported
        speakButton.forEach(v => {
            v.disabled = true;
            v.textContent = "Text-to-Speech not supported";
        })

    }
});