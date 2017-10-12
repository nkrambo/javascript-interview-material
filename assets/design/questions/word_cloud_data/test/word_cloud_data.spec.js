
import WordCloudData from '../word_cloud_data';

describe('WordCloudData()', () => {
  test('should build a word cloud map from an inpup string', () => {
    const falcon9 = 'Falcon 9 made history in 2012 when it delivered Dragon into the correct orbit for rendezvous with the International Space Station, making SpaceX the first commercial company ever to visit the station. Since then SpaceX has made multiple flights to the space station, both delivering and returning cargo for NASA. Falcon 9, along with the Dragon spacecraft, was designed from the outset to deliver humans into space and under an agreement with NASA, SpaceX is actively working toward that goal.';
    const spaceX = new WordCloudData(falcon9);
    expect(spaceX.cloud.has('Falcon')).toBeTruthy();
    expect(spaceX.cloud.has('history')).toBeTruthy();
    expect(spaceX.cloud.get('space')).toBe(3);
  });
});
