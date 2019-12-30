import PostData from "../rawData.json";
const occurCountry = id => {
  var count = PostData.reduce(
    (acc, cur) => (cur.country === id ? ++acc : acc),
    0
  );
  return count;
};
const CountryData = [];
const map3 = new Map();
for (const item of PostData) {
  if (!map3.has(item.country)) {
    map3.set(item.country, true);
    CountryData.push({
      text: item.country,
      value: occurCountry(item.country),
      relevance: item.relevance,
      likelihood: item.likelihood,
      url: item.url
    });
  }
}
export default CountryData;
