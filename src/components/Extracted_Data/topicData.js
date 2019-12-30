import PostData from "../rawData.json";
const occurTopic = id => {
  var count = PostData.reduce(
    (acc, cur) => (cur.topic === id ? ++acc : acc),
    0
  );
  return count;
};

const TopicData = [];
const map2 = new Map();
for (const item of PostData) {
  if (!map2.has(item.topic)) {
    map2.set(item.topic, true);
    TopicData.push({
      text: item.topic,
      value: occurTopic(item.topic),
      relevance: item.relevance,
      likelihood: item.likelihood,
      url: item.url
    });
  }
}
export default TopicData;
