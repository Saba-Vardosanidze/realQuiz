export const quizMedium = async () => {
  const catApi = "https://api.thecatapi.com/v1/images/search?limit=10";
  const dogApi = "https://dog.ceo/api/breeds/image/random";

  const [catRef, dogRef] = await Promise.all([
    fetch(catApi).then((res) => res.json()),
    fetch(dogApi).then((res) => res.json()),
  ]);
  const catFetch = catRef
    .slice(0, 3)
    .map((res) => ({url: res.url, isDog: false}));
  const dogFetch = {url: dogRef?.message, isDog: true};

  const result =
    Math.random() < 0.5 ? [...catFetch, dogFetch] : [dogFetch, ...catFetch];

  return result;
};
