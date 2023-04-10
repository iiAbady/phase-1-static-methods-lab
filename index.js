class Formatter {
  static capitalize(string) {
	  return `${string[0].toUpperCase()}${string.slice(1)}`
  }
  static sanitize(string) {
	  const regExp = /[^A-Za-z0-9 '-]/g;
	  return string.replace(regExp, '');
  }
  static titleize(string) {
	  const exceptWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
	  const stringWords = string.split(' ');
	  const firstWord = this.capitalize(stringWords[0]);
	  const rest = stringWords.slice(1);
	  let output = `${firstWord}`;
	  for (const _word of rest) {
		  let capitalizeWord = _word;
		  if(!exceptWords.includes(capitalizeWord)) capitalizeWord = this.capitalize(_word);
		  output += ` ${capitalizeWord}`
	  }
	  return output;
  }
}