export const api_url = 'http://192.168.1.35:8000/api';

export const API_ENDPOINTS = {
  SIDEBAR: (userId: string) => `${api_url}/user/${userId}/sidebars`,

  REGISTER: `${api_url}/register`,
  LOGIN: `${api_url}/login`,

  FINANCIAL: `${api_url}/finansial`,
  GETALLFINANCIAL: `${api_url}/getallfinansial`,
  GETFINANCIALBYID: (id: string) => `${api_url}/getfinansialbyid/${id}`,
  UPDATEFINANCIALBYID: (id: string) => `${api_url}/updatefinansialbyid/${id}`,
  DELETEFINANCIALBYID: (id: string) => `${api_url}/deletefinansialbyid/${id}`,
  
  ASPEKFORM: `${api_url}/aspek`,
  GETALLASPEK: `${api_url}/getallaspek`,

  LIMAC: `${api_url}/limac`,
  GETALLLIMAC: `${api_url}/getalllimac`,
  GETLIMACBYID: (id: string) => `${api_url}/getlimacbyid/${id}`,
  UPDATELIMACBYID: (id: string) => `${api_url}/updatelimacbyid/${id}`,
  DELETELIMACBYID: (id: string) => `${api_url}/deletelimacbyid/${id}`,

  PEMOHON: `${api_url}/pemohon`,
  GETPEMOHONBYID: (id: string) => `${api_url}/getpemohonbyid/${id}`,
  UPDATEPEMOHONBYID: (id: string) => `${api_url}/updatepemohonbyid/${id}`,
  DELETEPEMOHONBYID: (id: string) => `${api_url}/deletepemohonbyid/${id}`,
  GETALLPEMOHON:`${api_url}/getallpemohon`,
  GETNASABAH: `${api_url}/getregisternasabah`,
  GETNASABAHID:(value : string) => `${api_url}/pemohon/${value}`,

  GETSURVEY: `${api_url}/getSurvey`,
  ADDSURVEY: `${api_url}/addSurvey`,
  GETALLSURVEY: `${api_url}/getallsurvey`,
  
  SYNC_SIDEBAR: `${api_url}/sync-user-sidebars`,
  GETSIDEBAR: `${api_url}/getallusersidebar`,
  UPDATE_STATUS_SIDEBAR: `${api_url}/sidebars/update-status`,
  
  GETSEKTOREKONOMI: `${api_url}/getsektorekonomi`,

  GETALLPRODUK: `${api_url}/getallproduk`,
  GETSIFATKREDIT: `${api_url}/getsifatkredit`,
  ADDPRODUK: `${api_url}/produk`,
  UPDATEPENGAJUANBYID: (id: string) => `${api_url}/updatepengajuanbyid/${id}`,
  
  DELETEPRODUKBYID: (id: string) => `${api_url}/deleteprodukbyid/${id}`,

  GETTITLEASPEK: `${api_url}/gettitleaspek`,
  
  GETGOLONGANKREDIT: `${api_url}/getgolongankredit`,
  
  GETJENISAGUNAN: `${api_url}/getjenisagunan`,
  ADDJAMINAN: `${api_url}/jaminan`,
  GETALLJAMINAN: `${api_url}/getalljaminan`,
  GETJAMINANBYID: (id: string) => `${api_url}/getjaminanbyid/${id}`,
  UPDATEJAMINANBYID: (id: string) => `${api_url}/updatejaminanbyid/${id}`,
  DELETEJAMINANBYID: (id: string) => `${api_url}/deletejaminanbyid/${id}`,


  // GETQUESTION: `${api_url}/survey/{id}/pertanyaan`,
};