import Api from './Api';
class Company extends Api {
  constructor() {
    super();
  }
  async getCompanyData(ctx) {
    const { data } = await this.api.get(`/companies/by-user`, this.getAuthOptions(ctx));
    return data;
  }

  postCompany(data) {
    return this.api.post('/companies', data, this.getAuthOptions());
  }

  async uploadLogo(file) {
    const formData = new FormData();
    formData.append('file', file);
    const { headers } = this.getAuthOptions();
    const config = {
      ...headers,
      'content-type': 'multipart/form-data',
    };
    const { data } = await this.api.post('/companies/upload-logo', formData, config);
    return data.file_path;
  }

  editCompany(data) {
    return this.api.put('/companies', data, this.getAuthOptions());
  }

  async addPhoto(file) {
    const formData = new FormData();
    formData.append('file', file);
    const { headers } = this.getAuthOptions();
    const config = {
      headers: {
        ...headers,
        'content-type': 'multipart/form-data',
      },
    };
    const { data } = await this.api.post('/companies/photo', formData, config);
    return data;
  }

  deletePhoto(id) {
    return this.api.delete('/companies/photo/' + id, this.getAuthOptions());
  }

  async addLocation(location) {
    const { data } = await this.api.post('/companies/location', location, this.getAuthOptions());
    return data;
  }

  deleteLocation(id) {
    return this.api.delete('/companies/' + id, this.getAuthOptions);
  }
}

export default Company;
