exports.checkMash = function checkMash(input) {
    if (!input || input.length < 5) {
        return { isKeymash: false, confidence: 0 };
    }

    const lower = input.toLowerCase();
    const lettersOnly = lower.replace(/[^a-z]/g, '');

    let score = 0;

    // Repeated short pattern
    if (/^(.{2,4})\1+$/i.test(lower)) {
        score += 0.4;
    }

    // All characters from one keyboard row
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    if (rows.some(row => [...lower].every(c => row.includes(c)))) {
        score += 0.3;
    }

    // Low character diversity
    const uniqueChars = new Set(lettersOnly);
    if (uniqueChars.size <= 3 && lettersOnly.length >= 6) {
        score += 0.3;
    }

    // High consonant-to-vowel ratio
    const vowels = 'aeiou';
    const vowelCount = [...lettersOnly].filter(c => vowels.includes(c)).length;
    const consonantCount = lettersOnly.length - vowelCount;
    if (lettersOnly.length > 5 && consonantCount / (vowelCount + 1) > 5) {
        score += 0.2;
    }

    // Entropy estimation (basic)
    if (lettersOnly.length > 6 && uniqueChars.size / lettersOnly.length < 0.4) {
        score += 0.2;
    }

    // Clamp between 0 and 1
    const confidence = Math.min(score, 1);

    return {
        isKeymash: confidence >= 0.5,
        confidence: parseFloat(confidence.toFixed(2))
    };
}