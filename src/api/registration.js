export const registrationUser = async (newBlog) => {
  const res = await fetch(
    "https://67ae22f99e85da2f020c8b73.mockapi.io/registration",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBlog),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create comment");
  }
  return res.json();
};
