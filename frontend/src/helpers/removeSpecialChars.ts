const removeEspecialChars = function (text: string) {
  if (text) {
    const newText = text
      .toLowerCase()
      .replace(/[áàãâä]/g, 'a')
      .replace(/[éèêë]/g, 'e')
      .replace(/[íìîï]/g, 'i')
      .replace(/[óòõôö]/g, 'o')
      .replace(/[úùûü]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[^a-z0-9]/i, '_')
      .replace(/_+/, '-')
      .replaceAll(' ', '-');
    return newText;
  }
};

export default removeEspecialChars;
