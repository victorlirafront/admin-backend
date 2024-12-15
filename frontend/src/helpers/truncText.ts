const truncText = (text: string, maxChars: number): string => {
  if (text.length > maxChars) {
    return text.substring(0, maxChars) + '...';
  }
  return text;
};

export default truncText;
