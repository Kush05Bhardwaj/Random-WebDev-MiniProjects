function areAnagrams(str1, str2) {
      // Remove spaces and convert to lowercase
      str1 = str1.replace(/\s/g, '').toLowerCase();
      str2 = str2.replace(/\s/g, '').toLowerCase();

      // If lengths are different, they can't be anagrams
      if (str1.length !== str2.length) {
        return false;
      }

      // Count frequency of each character in first string
      let charCount = {};
      
      for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (charCount[char]) {
          charCount[char]++;
        } else {
          charCount[char] = 1;
        }
      }

      // Decrease frequency based on second string
      for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!charCount[char]) {
          return false;
        }
        charCount[char]--;
      }

      return true;
    }

    function checkAnagram() {
      const str1 = document.getElementById('string1').value;
      const str2 = document.getElementById('string2').value;
      const result = document.getElementById('result');

      if (!str1 || !str2) {
        alert('Please enter both strings!');
        return;
      }

      const isAnagram = areAnagrams(str1, str2);
      
      result.innerHTML = `
        <strong>String 1:</strong> "${str1}"<br>
        <strong>String 2:</strong> "${str2}"<br><br>
        <strong>Result:</strong> ${isAnagram ? '✓ These are Anagrams!' : '✗ These are NOT Anagrams'}
      `;
      result.className = isAnagram ? 'result show anagram' : 'result show not-anagram';
    }