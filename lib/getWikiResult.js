export default async function getWikiResults(search) {
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=pageimages|extracts&exchars=100&exintro=true&explaintext=true&exlimit=max&format=json&origin=*`
  );

  const data = await res.json();
  //   console.log(data);
  return data;
}
