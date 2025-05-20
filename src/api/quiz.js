export const catOrDogApi = async () => {
  const catApi = "https://api.thecatapi.com/v1/images/search?limit=10";
  const dogApi = "https://dog.ceo/api/breeds/image/random";

  const [catRef, dogRef] = await Promise.all([
    fetch(catApi).then((res) => res.json()),
    fetch(dogApi).then((res) => res.json()),
  ]);

  const catFetch = {url: catRef[0].url, isDog: false};
  const dogFetch = {url: dogRef.message, isDog: true};

  const result =
    Math.random() < 0.5 ? [catFetch, dogFetch] : [dogFetch, catFetch];

  return result;
};
