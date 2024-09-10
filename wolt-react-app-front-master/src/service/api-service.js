class ApiService {

  getResource = async ({ url }) => {
    const res = await fetch(`${this.API_BASE}${url}&apiKey=${this.API_KEY2}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  searchMenuItem = async ({ query, number }) => {
    const url = `/food/menuItems/search?query=${query}&number=${number}`;

    const res = await this.getResource({ url });
    return res;
  };

  searchMenuItemByUrl = async ({ path, number }) => {
    const url = `/food/menuItems/search?${path}&number=${number}`;

    const res = await this.getResource({ url });
    return res;
  };

  getDetailById = async ({ id }) => {
    const url = `/food/menuItems/${id}?apiKey=${this.API_KEY4}`;
  
    const res = await this.getResource({ url });
    return res;
  };
}

const apiService = new ApiService();

export default apiService;
