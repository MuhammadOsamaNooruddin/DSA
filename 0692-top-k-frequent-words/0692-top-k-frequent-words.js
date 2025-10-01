/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
    if(!words.length || words.length < k) return [];
  
  let freq = {};
  for(let word of words){
    freq[word] = (freq[word] || 0) + 1;
  }
  
  const sortedWords = Object.keys(freq).sort((a,b) => {
    if(freq[b] === freq[a]){
      return a.localeCompare(b);
    }else{
      return freq[b] - freq[a];
    }
  })
  
  return sortedWords.slice(0,k)
};