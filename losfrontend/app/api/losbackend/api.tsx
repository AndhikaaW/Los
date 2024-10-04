export const api_url = 'http://192.168.1.35:8000/api';

export const API_ENDPOINTS = {
  //user
  SIDEBAR: (userId: string) => `${api_url}/user/${userId}/sidebars`,
  REGISTER: `${api_url}/register`,
  LOGIN: `${api_url}/login`,
  UPDATE_USER: (id: string) => `${api_url}/updateuserbyid/${id}`,

  //sidebar
  SYNC_SIDEBAR: `${api_url}/sync-user-sidebars`,
  GETSIDEBAR: `${api_url}/getallusersidebar`,
  UPDATE_STATUS_SIDEBAR: `${api_url}/sidebars/update-status`,

  //finansial
  FINANCIAL: `${api_url}/finansial`,
  GETALLFINANCIAL: `${api_url}/getallfinansial`,
  GETFINANCIALBYNOPENGAJUAN: (no_pengajuan: string) => `${api_url}/getfinansialbynopengajuan/${no_pengajuan}`,
  GETFINANCIALBYCIF: (cif: string) => `${api_url}/getfinansialbycif/${cif}`,
  UPDATEFINANCIALBYID: (no_pengajuan: string) => `${api_url}/updatefinansialbyid/${no_pengajuan}`,
  DELETEFINANCIALBYID: (no_pengajuan: string) => `${api_url}/deletefinansialbyid/${no_pengajuan}`,
  
  //aspek
  ASPEKFORM: `${api_url}/aspek`, 
  GETALLASPEK: `${api_url}/getallaspek`,
  GETASPEKBYNOPENGAJUAN: (no_pengajuan: string) => `${api_url}/getaspekbynopengajuan/${no_pengajuan}`,
  UPDATEASPEKBYID: (no_pengajuan: string) => `${api_url}/updateaspekbyid/${no_pengajuan}`,
  DELETEASPEKBYID: (no_pengajuan: string) => `${api_url}/deleteaspekbyid/${no_pengajuan}`,

  //limac
  LIMAC: `${api_url}/limac`,
  GETALLLIMAC: `${api_url}/getalllimac`,
  GETLIMACBYNOPENGAJUAN: (no_pengajuan: string) => `${api_url}/getlimacbynopengajuan/${no_pengajuan}`,
  UPDATELIMACBYID: (no_pengajuan: string) => `${api_url}/updatelimacbyid/${no_pengajuan}`,
  DELETELIMACBYID: (no_pengajuan: string) => `${api_url}/deletelimacbyid/${no_pengajuan}`,

  //pemohon
  PEMOHON: `${api_url}/pemohon`,
  GETPEMOHONBYID: (id: string) => `${api_url}/getpemohonbyid/${id}`,
  UPDATEPEMOHONBYID: (id: string) => `${api_url}/updatepemohonbyid/${id}`,
  DELETEPEMOHONBYID: (Cif: string) => `${api_url}/deletepemohonbyid/${Cif}`,
  GETALLPEMOHON:`${api_url}/getallpemohon`,
  GETNASABAH: `${api_url}/getregisternasabah`,
  GETNASABAHID:(value : string) => `${api_url}/pemohon/${value}`,

  //survey
  GETSURVEY: `${api_url}/getSurvey`,
  ADDSURVEY: `${api_url}/addSurvey`,
  GETALLSURVEY: `${api_url}/getallsurvey`,
  GETSURVEYBYNOPENGAJUAN: (no_pengajuan: string) => `${api_url}/getsurveybynopengajuan/${no_pengajuan}`,
  UPDATESURVEYBYID: (no_pengajuan: string) => `${api_url}/updatesurveybyid/${no_pengajuan}`,
  DELETESURVEYBYID: (no_pengajuan: string) => `${api_url}/deleteSurveybyid/${no_pengajuan}`,
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
  GETLASTPENGAJUAN: `${api_url}/getlastpengajuan`,
  ADDPRODUK: `${api_url}/produk`,
  UPDATEPENGAJUANBYID: (id: string) => `${api_url}/updatepengajuanbyid/${id}`,

  //pengajuan kredit
  GETGOLONGANKREDIT: `${api_url}/getgolongankredit`,
  
  ADDJAMINAN: `${api_url}/jaminan`,
  GETALLJAMINAN: `${api_url}/getalljaminan`,
  GETJAMINANBYID: (id: string) => `${api_url}/getjaminanbyid/${id}`,
  UPDATEJAMINANBYID: (no_pengajuan: string) => `${api_url}/updatejaminanbyid/${no_pengajuan}`,
  DELETEJAMINANBYID: (no_pengajuan: string) => `${api_url}/deletejaminanbyid/${no_pengajuan}`,
  GETJAMINANBYNOPENGAJUAN: (no_pengajuan: string) => `${api_url}/getjaminanbyid/${no_pengajuan}`,

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

  //Master Pengajuan Kredit
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

  //master Pemohon
  GETSEKTORPEMOHON: `${api_url}/getsektorekonomi`,
  TAMBAHSEKTORPEMOHON: `${api_url}/tambahSektorEkonomi`,
  UPDATESEKTORPERMOHON: (Kode: string) => `${api_url}/updatesektorekonomibyid/${Kode}`,
  DELETESEKTORPERMOHON: (Kode: string) => `${api_url}/deletesektorekonomibyid/${Kode}`,
  GETSTATUSUSAHA: `${api_url}/getstatususaha`,
  TAMBAHSTATUSUSAHA: `${api_url}/tambahStatusUsaha`,
  UPDATESTATUSUSAHA: (Kode: string) => `${api_url}/updatestatususahabyid/${Kode}`,
  DELETESTATUSUSAHA: (Kode: string) => `${api_url}/deletestatususahabyid/${Kode}`,
  GETSTATUSTEMPATTINGGAL: `${api_url}/getstatusTempatTinggal`,
  TAMBAHSTATUSTEMPATTINGGAL: `${api_url}/tambahStatusTempatTinggal`,
  UPDATESTATUSTEMPATTINGGAL: (Kode: string) => `${api_url}/updatestatusTempatTinggalbyid/${Kode}`,
  DELETESTATUSTEMPATTINGGAL: (Kode: string) => `${api_url}/deletestatusTempatTinggalbyid/${Kode}`,
  GETPROFESISAMPAINGAN: `${api_url}/getprofesisampingan`,
  TAMBAHPROFESISAMPAINGAN: `${api_url}/tambahProfesiSampingan`,
  UPDATEPROFESISAMPAINGAN: (Kode: string) => `${api_url}/updateprofesisampinganbyid/${Kode}`,
  DELETEPROFESISAMPAINGAN: (Kode: string) => `${api_url}/deleteprofesisampinganbyid/${Kode}`,
};