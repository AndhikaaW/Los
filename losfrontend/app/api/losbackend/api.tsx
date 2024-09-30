export const api_url = 'http://192.168.1.35:8000/api';

export const API_ENDPOINTS = {
  //user
  SIDEBAR: (userId: string) => `${api_url}/user/${userId}/sidebars`,
  REGISTER: `${api_url}/register`,
  LOGIN: `${api_url}/login`,

  //sidebar
  SYNC_SIDEBAR: `${api_url}/sync-user-sidebars`,
  GETSIDEBAR: `${api_url}/getallusersidebar`,
  UPDATE_STATUS_SIDEBAR: `${api_url}/sidebars/update-status`,

  //finansial
  FINANCIAL: `${api_url}/finansial`,
  GETALLFINANCIAL: `${api_url}/getallfinansial`,
  GETFINANCIALBYID: (id: string) => `${api_url}/getfinansialbyid/${id}`,
  GETFINANCIALBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getfinansialbynomorrekening/${nomorRekening}`,
  GETFINANCIALBYCIF: (cif: string) => `${api_url}/getfinansialbycif/${cif}`,
  UPDATEFINANCIALBYID: (id: string) => `${api_url}/updatefinansialbyid/${id}`,
  DELETEFINANCIALBYID: (id: string) => `${api_url}/deletefinansialbyid/${id}`,
  
  //aspek
  ASPEKFORM: `${api_url}/aspek`, 
  GETALLASPEK: `${api_url}/getallaspek`,
  GETASPEKBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getaspekbynomorrekening/${nomorRekening}`,
  DELETEASPEKBYID: (id: string) => `${api_url}/deleteaspekbyid/${id}`,

  //limac
  LIMAC: `${api_url}/limac`,
  GETALLLIMAC: `${api_url}/getalllimac`,
  GETLIMACBYID: (id: string) => `${api_url}/getlimacbyid/${id}`,
  GETLIMACBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getlimacbynomorrekening/${nomorRekening}`,
  UPDATELIMACBYID: (id: string) => `${api_url}/updatelimacbyid/${id}`,
  DELETELIMACBYID: (id: string) => `${api_url}/deletelimacbyid/${id}`,

  //pemohon
  PEMOHON: `${api_url}/pemohon`,
  GETPEMOHONBYID: (id: string) => `${api_url}/getpemohonbyid/${id}`,
  UPDATEPEMOHONBYID: (id: string) => `${api_url}/updatepemohonbyid/${id}`,
  DELETEPEMOHONBYID: (id: string) => `${api_url}/deletepemohonbyid/${id}`,
  GETALLPEMOHON:`${api_url}/getallpemohon`,
  GETNASABAH: `${api_url}/getregisternasabah`,
  GETNASABAHID:(value : string) => `${api_url}/pemohon/${value}`,

  //survey
  GETSURVEY: `${api_url}/getSurvey`,
  ADDSURVEY: `${api_url}/addSurvey`,
  GETALLSURVEY: `${api_url}/getallsurvey`,
  GETALLSURVEYBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getallsurveybynomorrekening/${nomorRekening}`,
  //tambah judul survey
  ADDTITLESURVEY: `${api_url}/addTitleSurvey`,
  UPDATETITLESURVEYBYID: (Kode: string) => `${api_url}/updateTitleSurveybyid/${Kode}`,
  DELETEREFSURVEYBYID: (Kode: string) => `${api_url}/deleterRefSurveybyid/${Kode}`,
  
  //produk
  GETSEKTOREKONOMI: `${api_url}/getsektorekonomi`,
  GETALLPRODUK: `${api_url}/getallproduk`,
  GETPRODUKBYCIF: (cif: string) => `${api_url}/getprodukbycif/${cif}`,
  GETPRODUKBYID: (id: string) => `${api_url}/getprodukbyid/${id}`,
  DELETEPRODUKBYID: (NomorRekening: string) => `${api_url}/deleteprodukbyid/${NomorRekening}`,

  //sifat kredit
  
  ADDPRODUK: `${api_url}/produk`,
  UPDATEPENGAJUANBYID: (id: string) => `${api_url}/updatepengajuanbyid/${id}`,

  //pengajuan kredit
  GETGOLONGANKREDIT: `${api_url}/getgolongankredit`,
  
  ADDJAMINAN: `${api_url}/jaminan`,
  GETALLJAMINAN: `${api_url}/getalljaminan`,
  GETJAMINANBYID: (id: string) => `${api_url}/getjaminanbyid/${id}`,
  UPDATEJAMINANBYID: (id: string) => `${api_url}/updatejaminanbyid/${id}`,
  DELETEJAMINANBYID: (id: string) => `${api_url}/deletejaminanbyid/${id}`,
  GETJAMINANBYNOMORREKENING: (nomorRekening: string) => `${api_url}/getjaminanbynomorrekening/${nomorRekening}`,

  //Master Jaminan
  //tambah title aspek
  TAMBAHTITLEASPEK: `${api_url}/tambahTitleAspek`,
  GETTITLEASPEK: `${api_url}/gettitleaspek`,
  UPDATETITLEASPEKBYID: (Kode: string) => `${api_url}/updatetitleaspekbyid/${Kode}`,
  DELETETITLEASPEKBYID: (Kode: string) => `${api_url}/deletetitleaspekbyid/${Kode}`,
  //tambah jenis agunan
  TAMBAHJENISAGUNAN: `${api_url}/tambahjenisagunan`,
  GETJENISAGUNAN: `${api_url}/getjenisagunan`,
  UPDATEJENISAGUNANBYID: (Kode: string) => `${api_url}/updatejenisagunanbyid/${Kode}`,
  DELETEJENISAGUNANBYID: (Kode: string) => `${api_url}/deletejenisagunanbyid/${Kode}`,
  //tambah hak milik
  TAMBAHHAKMILIK: `${api_url}/tambahHakMilik`,
  GETHAKMILIK: `${api_url}/getHakMilik`,
  UPDATEHAKMILIKBYID: (Kode: string) => `${api_url}/updateHakMilikbyid/${Kode}`,
  DELETEHAKMILIKBYID: (Kode: string) => `${api_url}/deleteHakMilikbyid/${Kode}`,
  //tambah tipe
  TAMBAHTIPE: `${api_url}/tambahTipe`,
  GETTIPE: `${api_url}/getTipe`,
  UPDATETIPEBYID: (Kode: string) => `${api_url}/updateTipebyid/${Kode}`,
  DELETETIPEBYID: (Kode: string) => `${api_url}/deleteTipebyid/${Kode}`,
  //tambah jenis pengikatan
  TAMBAHJENISPENGIKATAN: `${api_url}/tambahJenisPengikatan`,
  GETJENISPENGIKATAN: `${api_url}/getJenisPengikatan`,
  UPDATEJENISPENGIKATANBYID: (Kode: string) => `${api_url}/updateJenisPengikatanbyid/${Kode}`,
  DELETEJENISPENGIKATANBYID: (Kode: string) => `${api_url}/deleteJenisPengikatanbyid/${Kode}`,
  //tambah hubungan pemilik
  TAMBAHHUBUNGANPEMILIK: `${api_url}/tambahHubunganPemilik`,
  GETHUBUNGANPEMILIK: `${api_url}/getHubunganPemilik`,
  UPDATEHUBUNGANPEMILIKBYID: (Kode: string) => `${api_url}/updateHubunganPemilikbyid/${Kode}`,
  DELETEHUBUNGANPEMILIKBYID: (Kode: string) => `${api_url}/deleteHubunganPemilikbyid/${Kode}`,

  //MasterPengajuan Kredit
  //tambah bidang usaha
  GETBIDANGUSAHA: `${api_url}/getbidangusaha`,
  TAMBAHBIDANGUSAHA: `${api_url}/tambahBidangUsaha`,
  UPDATEBIDANGUSAHA: (Kode: string) => `${api_url}/updatebidangusahabyid/${Kode}`,
  DELETEBIDANGUSAHA: (Kode: string) => `${api_url}/deletebidangusahabyid/${Kode}`,

  GETSIFATKREDIT: `${api_url}/getsifatkredit`,
  TAMBAHSIFATKREDIT: `${api_url}/tambahSifatKredit`,
  UPDATESIFATKREDIT: (Kode: string) => `${api_url}/updateSifatKreditbyid/${Kode}`,
  DELETESIFATKREDIT: (Kode: string) => `${api_url}/deleteSifatKreditbyid/${Kode}`,

  GETJENISANGURAN: `${api_url}/getjenisanguran`,
  TAMBAHJENISANGURAN: `${api_url}/tambahJenisAnguran`,
  UPDATEJENISANGURAN: (Kode: string) => `${api_url}/updateJenisAnguranbyid/${Kode}`,
  DELETEJENISANGURAN: (Kode: string) => `${api_url}/deleteJenisAnguranbyid/${Kode}`,

  GETJENISPERMOHONAN: `${api_url}/getjenispermohonan`,
  TAMBAHJENISPERMOHONAN: `${api_url}/tambahJenisPermohonan`,
  UPDATEJENISPERMOHONAN: (Kode: string) => `${api_url}/updateJenisPermohonanbyid/${Kode}`,
  DELETEJENISPERMOHONAN: (Kode: string) => `${api_url}/deleteJenisPermohonanbyid/${Kode}`,
};