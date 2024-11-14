function likes(names) {
  const message = "likes this";
  const message2 = "like this"

  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} ${message}`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} ${message2}`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${message2}`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and 2 others ${message2}`;
  }
}