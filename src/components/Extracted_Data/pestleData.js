import PostData from "../rawData.json";
const occurPestle = id => {
  var count = PostData.reduce(
    (acc, cur) => (cur.pestle === id ? ++acc : acc),
    0
  );
  return count;
};

const PestleData = [];
const map5 = new Map();
for (const item of PostData) {
  if (!map5.has(item.pestle)) {
    map5.set(item.pestle, true);
    PestleData.push({
      text: item.pestle,
      value: occurPestle(item.pestle),
      relevance: item.relevance,
      likelihood: item.likelihood,
      url: item.url
    });
  }
}
export default PestleData;
