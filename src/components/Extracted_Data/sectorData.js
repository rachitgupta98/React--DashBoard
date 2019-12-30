import PostData from "../rawData.json";

const occurSector = id => {
  var count = PostData.reduce(
    (acc, cur) => (cur.sector === id ? ++acc : acc),
    0
  );
  return count;
};
const SectorData = [];
const map1 = new Map();
for (const item of PostData) {
  if (!map1.has(item.sector)) {
    map1.set(item.sector, true);
    SectorData.push({
      text: item.sector,
      value: occurSector(item.sector),
      relevance: item.relevance,
      likelihood: item.likelihood,
      url: item.url
    });
  }
}
export default SectorData;
