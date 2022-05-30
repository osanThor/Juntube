class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const res = await this.youtube.get("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    return res.data.items;
  }

  async search(query) {
    const res = await this.youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 25,
        q: query,
      },
    });
    return res.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
