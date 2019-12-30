import PostData from "../rawData.json";
const occurRegion = id => {
  var count = PostData.reduce(
    (acc, cur) => (cur.region === id ? ++acc : acc),
    0
  );
  return count;
};
const RegionData = [];
const map4 = new Map();
for (const item of PostData) {
  if (!map4.has(item.region)) {
    map4.set(item.region, true);
    RegionData.push({
      text: item.region,
      value: occurRegion(item.region),
      relevance: item.relevance,
      likelihood: item.likelihood,
      url: item.url
    });
  }
}
export default RegionData;
