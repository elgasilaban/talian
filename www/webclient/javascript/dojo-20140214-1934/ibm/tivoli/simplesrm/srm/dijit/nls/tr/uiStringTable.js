//>>built
//////////////////////////////////////////////////////////////////
// @JS_LONG_COPYRIGHT_BEGIN@
// @JS_LONG_COPYRIGHT_END@
//////////////////////////////////////////////////////////////////

/*
 * Message IDs are formed as CTJZHxxxxY where xxxx is the 4-digit
 * range of the functional component and Y is one of E, W, or I.
 * For the Web UI, the range is 2300-2999.
 */
define(
({ 
	Title: "Tivoli Self Servis İstasyonu",
	About: "Hakkında",
	Help: "Yardım",
	Logout: "Oturumu Kapat",
	Welcome: "Hoş Geldiniz",
	// Login widget
	LoginHeading: "Maximo Oturumunu Aç",
	Username: "Kullanıcı Adı",
	Password: "Parola",
	Login: "Oturum Aç",
	InvalidLogin: "Kullanıcı Adı ya da Parola hatalı. Lütfen yeniden deneyin.",
	NotAuthorized: "Bu uygulamayı kullanma yetkiniz yok",
	// MyCatalogRequestsGrid widget
	ShowSelectedDetails: "Seçilen satırın ayrıntılarını göster",
	ApproveSelectedRequest: "Seçilen isteği onayla",
	RejectSelectedRequest: "Seçilen isteği reddet",
	ShowDetails: "Ayrıntıları göster",
	
	SRRequestPodHeading: "İsteklerim",	
	SRShowMyRequestsLink: "Tüm İsteklerimi Göster...",
	SRMyRequests: "İsteklerim",
	
	INCIDENTRequestPodHeading: "Olaylarım",
	INCIDENTShowMyRequestsLink: "Tüm Olaylarımı Göster...",
	INCIDENTMyRequests: "Olaylarım",
	
	AssetsPodHeading: "Varlıklarım",	
	ShowMyAssetsLink: "Tüm Varlıklarımı Göster...",
	MyAssets: "Varlıklarım",
	
	ShowAllRequests: "Tüm istekleri göster",
	ShowLastRequests: "Son ${0} isteği göster",
	ShowAllNews: "Tüm haberleri göster",
	ShowLastNews: "Son ${0} haberi göster",
	MyApprovalHeading: "Onaylarım",	
	Refresh: "Yenile",
	// my catalog request grid column headings
	TotalCost: "Toplam Maliyet",
	StatusDate: "Durum Zamanı",
	RequestedBy: "İsteyen",
	Status: "Durum",
	Quantity: "Miktar",
	UnitCost: "Birim Maliyeti",
	Description: "Açıklama",
	ItemNum: "İstek Tipi",
	RequestedFor: "İstenme Amacı",
	ItemSetID: "Parça Kümesi Tanıtıcısı",
	DateEntered: "Girildiği Tarih",
	MRNum: "MRNUM",
	Priority: "Öncelik",
	SiteID: "Yer Tanıtıcısı",
	MRLINEID: "MRLINE TANITICISI",
	// MyDeploymentsGrid
	Name: "Ad",
	ServiceOwner: "Hizmet Sahibi",
	//ChnageDate: "Change Date",
	DueDate: "Son Tarih",
	CreatedDate: "Oluşturulduğu Tarih",
	StartDate: "Hedef Başlangıç",
	OfferingDescription: "İstek Açıklaması",
	Approval: "Onay",
	// Catalog Request Creator
	CatalogRequestCreateHeading: "Yeni İstek Oluştur",
	CatalogOfferingPrompt: "Hizmet Kataloğu Olanağı",
	CreateRequestStatus: "İstek Başarıyla Gönderildi",
	CreateRequestButtonLabel: "Tamam",
	CancelButtonLabel: "İptal",
	Location: "Konum",
	AssetNumber: "Varlık Numarası",
	Serial: "Seri Numarası", 
	IsPrimary: "Birincil",
	IsUser: "Kullanıcı",
	IsCustodian: "Sorumlu Kişi",		
	RefreshDate: "Yenileme Tarihi",
	PlannedRefreshDate: "Planlanan Yenileme Tarihi",
	ChangeDate: "Değişiklik Tarihi",
	AssetActivity: "Geçerli Varlıklar",
	
	// Navigator widget
	Home: "Ana Sayfa",
	Back: "Geri", 
	Forward: "İleri",
	HomeBreadcrumb: "Ana Sayfa",
	Search: "Ara",
	SearchAdjust: "Aramanızı Ayarlayın",
	SearchResults: "Arama Sonuçları",
	Close: "Kapat",
	IncidentsLabel: "Yardım Bildirim Formu Oluşturma ve Destek",
	IncidentsDesc: "Var olan bir varlık ya da hizmet için bir yardım bildirim formu açın.",
	RequestsLabel: "Yeni Hizmet İste",
	RequestsDesc: "Yeni bir varlık ya da hizmet isteyin.",
    IssuesLabel: "Sorun Bildir",
    IssuesDesc: "Bir sorunu bildirmek için yeni bir Hizmet İsteği oluşturun.",
    BrowseSolutionsLabel: "Çözümlere Göz At",
    BrowseSolutionsDesc: "Var olan tüm Çözümleri görüntüleyin.",
    
	RecentsLabel: "Sık Yapılan İstekler",
	RecentsDesc: "En sık istekte bulunduğunuz hizmetlere kolay erişim.",
	HelpFixLabel: "Çözüm Ara",
   SearchToolTip: "Bir ya da diğer bir sözcüğe dayalı olarak aramak için boşluk ya da OR işleci kullanın. Örnek: virüs koruması, virüs OR koruma. Mevcut birden çok sözcüğe dayalı olarak aramak için AND işlecini kullanın. Örnek: lotus AND notes. Tam eşleşme için sözcükleri çift tırnak içine alın. Örnek: \"lotus notes\".",
	createSRToolTip: "Bir Sorunu bildirmek ya da bir istekte bulunmak için yeni bir Hizmet İsteği oluşturun.",
	templateToolTip: "Alışveriş Sepeti Şablonları",
	
	None: "Yok",
	NA: "Yok",
	//branch in navigator tree
	Directory: "Dizin",
	//leaf in navigator tree
	Panel: "Pano",
	// DateRange Widget
	DurationLabel: "Bu süre boyunca",
	MonthsLabel: "Ay",
	WeeksLabel: "Hafta",
	DaysLabel: "Gün",
	ForeverLabel: "Belirsiz",
	StartDateLabel: "Başlangıç Tarihi",
	EndDateLabel: "Bitiş Tarihi",
	StartTime: "Başlangıç Saati",
	EndTime: "Bitiş Saati",
	UntilLabel: "Bu tarihe kadar",
	InvalidDurationMessage: "Süre 0'dan büyük olmalıdır",
	InvalidDateMessage: "Bu geçerli bir tarih değil",
	DateEarlyMessage: "Bu tarih, izin verilebilir en erken tarih olan ${0} tarihinden önce",
	DateLateMessage: "Bu tarih, izin verilebilir en geç tarih olan ${0} tarihinden sonra",
	MissingDateMessage: "Bu tarih gerekli",

	Loading: "Yükleniyor...",
	RecentActivity: "Son Etkinlik",
	NoRecentActivity: "Son etkinlik yok",
    NoAssetsAssigned: "Atanan varlık yok",
	ManageRequests: "İstekleri Yönet",
	ManageRequestsLink: "İstekleri Yönet...",
	ManageApprovalsLink: "Onayları Yönet...",
	ManageMyNewsLink: "Haberlerimi Görüntüle...",
	ManageMyNews: "Haberlerimi Görüntüle",
	ManageApprovals: "Onayları Yönet",
    CartID: "Alışveriş Sepeti Tanıtıcısı",
	

	//General
	OK : "Tamam",
	Cancel : "İptal",
	Select: "Seç",
	Total: "Toplam",
	TotalLabel: "Toplam: ",
	ConfirmationProceed: "Devam etmek istediğinizden emin misiniz?",
	ConfirmationDialogTitle: "Onay gerekli",
	
	// error messages
	CTJZH2301E: "CTJZH2301E: Bu istek için giriş formu oluşturulurken bir hata oluştu.",
	CTJZH2302E: "CTJZH2302E: Bu isteğin ayrıntıları alınırken bir hata oluştu.",
	CTJZH2303E: "CTJZH2303E: İstek oluşturmak için oturum açmış olmalısınız.",
		
	CTJZH2305E: "CTJZH2305E: Geçersiz değerler içeren giriş alanlarınız var. Devam etmeden önce bu hataları düzeltmelisiniz.",
	CTJZH2306E: "CTJZH2306E: Sistem, bu isteğin oluşturulmasında hata olduğunu bildirdi.",
	CTJZH2307E: "CTJZH2307E: Oturumunuz açılırken bir hata oluştu.",
	CTJZH2308E: "CTJZH2308E: Üzgünüz, ancak bu isteğin oluşturulması şu anda desteklenmiyor.",
	CTJZH2309E: "CTJZH2309E: Bir iç hata nedeniyle işleme devam edilemiyor.",
		
	CTJZH2313E: "CTJZH2313E: Hizmet istekleri listesi alınamadı.",
	CTJZH2360E: "CTJZH2360E: Varlık listesi alınamadı.",
		
	CTJZH2316E: "CTJZH2316E: Görüntülenecek ileti, boş değerli, tanımsız veya boş kod içeriyor ya da geçersiz tipte.",
	CTJZH2317E: "CTJZH2317E: Parola onayı eşleşmiyor.", 
	CTJZH2318E: "CTJZH2318E: En fazla 5 ekip seçilebilir.",
	CTJZH2319E: "CTJZH2319E: Kullanıcı adı zaten var.",
	CTJZH2320E: "CTJZH2320E: En fazla 15 kullanıcı seçilebilir.",
	CTJZH2321I: "CTJZH2321I: Bu istek için görüntülenecek ayrıntı yok.",
	CTJZH2322E: "CTJZH2322E: Parolanın başında ya da sonunda boşluk olamaz.", 
	CTJZH2324E: "CTJZH2324E: Kullanıcı adında boşluk var.",	
	CTJZH2323E: "CTJZH2323E: Bu tipte kayıtlı kaynak havuzu olmadığından, bu hizmet isteği gönderilemiyor.", 
	CTJZH2325E: "CTJZH2325E: İstek artık kullanılamaz.",
	CTJZH2328W: "CTJZH2328W: Kullanıcıyı silme işlemi geri alınamaz ve kullanıcı kimliği hiçbir zaman yeniden kullanılamaz.", 
	CTJZH2329E: "CTJZH2329E: Belirtilen kullanıcı kimliği, silinmiş bir kullanıcıya ait olduğundan yeniden kullanılamıyor.", 
	CTJZH2331E: "CTJZH2331E: Seçtiğiniz isteğin işlenmesi başarısız oldu.",
		
    CTJZH2334E: "CTJZH2334E: Bu yeni hizmet isteği sağlanan verilerle güncellenirken bir sunucu hatası oluştu",
	CTJZH2335E: "CTJZH2335E: Bu yeni hizmet isteği oluşturulurken kurtarılamaz bir sunucu hatası oluştu",
	CTJZH2336E: "CTJZH2336E: Onay Ayrıntıları girişi, 50 karakterlik uzunluk üst sınırını aştı.",	
	CTJZH2337E: "CTJZH2337E: Oturum açmadığınızdan yeni bir hizmet isteği oluşturulamıyor",
	CTJZH2338E: "CTJZH2338E: Bu yeni hizmet isteği oluşturulurken bir sunucu hatası oluştu",
	CTJZH2339I: "CTJZH2339I: Üzgünüz, eşleşme bulunamadı.",
	
	CTJZH2342E: "CTJZH2342E: Bu istek oluşturulurken bir hata oluştu.",
		
	CTJZH2345E: "CTJZH2345E: Etkin projeleri varken bu ekibi kaldıramazsınız.",
	CTJZH2346E: "CTJZH2346E: Parola en az 6 karakter uzunluğunda olmalıdır",
	
	CTJZH2353I: "CTJZH2353I: Bu istekte izin verilen maksimum Ekip değişikliği sayısından (en fazla 5) fazlasını yapmaya çalışıyorsunuz. 5'ten fazla ekip değişikliği yapmak için, ek Ekip Değiştirme istekleri oluşturun.",
	CTJZH2354I: "CTJZH2354I: Bu istekte izin verilen maksimum Kullanıcı değişikliği sayısından (en fazla 15) fazlasını yapmaya çalışıyorsunuz. 15'ten fazla kullanıcı değişikliği yapmak için, ek Kullanıcı Değiştirme istekleri oluşturun.",	
	
	CTJZH2355I: "CTJZH2355I: Arama Dizini verileri kullanılamıyor ya da bozuk. PmObjSearchCron Sıralanmış Görevini yeniden çalıştırın.",
	CTJZH2356I: "CTJZH2356I: Bir arama dizesi girmelisiniz",
	CTJZH2357I: "CTJZH2357I: Arama Dizini verileri güncelleniyor. Daha sonra tekrar deneyin.",
	CTJZH2358I: "CTJZH2358I:NODICTION",
	CTJZH2361I: "CTJZH2361I: Bu kullanıcı için kullanılabilir ya da etkin Olanak ya da Şablon yok. Kullanıcının Katalog Ürünlerine ya da Bildirim Formu Şablonlarına erişim yetkisi olup olmadığını denetleyin.",
	CTJZH2362I: "CTJZH2362I: Internet Explorer'da Self Servis Merkezi özelliklerini etkinleştirmek için Silverlight eklentisini kurun: www.microsoft.com/getsilverlight/",

    	
	//String list for user and team
	//Role: "Role",
	//Language: "Language",
	Team: "Ekip",
	UserTeams: "Kullanıcı Ekipleri",
	
	//UserStatus: "Activate user account",
	LOGINID: "Oturum Açma Kimliği",
	AccountLegend: "Hesap Ayarları",
	PersonalInfoLegend: "Kişisel Bilgiler",
	RegionalSettLegend: "Bölgesel Ayarlar",
	FirstName: "Ad",
	LastName: "Soyadı",
	DisplayName: "Görünen Ad",
	Email: "E-Posta",
	Telephone: "Telefon",
	Address: "Adres",
	City: "İl",
	State: "Eyalet",
	Country: "Ülke",
	AccountStatus: "Etkin",
	EmptyString: "               ",
	UserList: "Mevcut Kullanıcılar",
	UserID: "Kullanıcı Kimliği",
	Role: "Rol",
	ConfirmPassword: "Parolayı Doğrula",
	InvalidConfirmPassword: "Parola onayı eşleşmiyor",
	PressToAddTeam: "Ekip eklemek için + düğmesine basın",
	CreateUserInstruction: "Bir kullanıcı her istek için en fazla 5 ekibe eklenebilir. Kullanıcıyı daha fazla ekibe eklemek için ek Kullanıcı Değiştir istekleri oluşturun.",
	ModifyUserInstruction: "Bir kullanıcı her istek için en fazla 5 ekibe eklenebilir veya 5 ekipten kaldırılabilir. Ek değişiklikler yapmak için, ek Kullanıcı Değiştir istekleri oluşturun.",
	// Team Management
	TeamID: "Tanıtıcı",
	TeamName: "Ad",
	TeamDescription: "Açıklama",
	UserList: "Mevcut Kullanıcılar",
	SelectedUserList: "Seçilen Kullanıcılar",
	TeamDetails: "Ekip Ayrıntıları",
	ProjectAccount: "Proje Hesabı",
	QuickFilter: "hızlı süzgeç",
	TeamNameExists: "Aynı ada sahip bir ekip zaten var.",
	CreateTeamInstruction: "Bir ekip her istek için en fazla 15 kullanıcı içerebilir. Ekibe daha fazla kullanıcı eklemek için, ek Ekip Değiştir istekleri oluşturun.",
	ModifyTeamInstruction: "Bir ekibe her istek için en fazla 15 kullanıcı ekleyebilir veya kaldırabilirsiniz. Ek değişiklikler yapmak için, ek Ekip Değiştir istekleri oluşturun.",

	Yes: "Evet",
	No: "Hayır",
	UserExist: "Kullanıcı zaten var",
	MaxTeamsExceed: "Ekip uzunluğu üst sınırını aşıyor",
	PreviewCloseTitle: "Bölümü Kapat",
	PreviewOpenTitle: "Bölümü Aç",

	/* Service Request details */
	Application: "Uygulama",
	CreatedOn: "Oluşturulduğu tarih",
	Date: "Tarih",
	Details: "Ayrıntılar",
	From: "Başlangıç",
	Subject: "Konu",
	Summary: "Özet",
	FailedStatus: "Başarısız",
	To: "Kime",
	ViewSRDetails: "İstek Ayrıntıları",
	ViewSRTitle: "Hizmet İsteğini Görüntüle",
	ViewSRGeneral: "Genel",
	ViewSRGenBannerApproval: "Bu görev bir hizmet isteğini onaylamanıza ya da reddetmenize olanak sağlar",
	ViewSRGenBannerNoApproval: "Bu görev hizmet isteğinin ayrıntılarını görüntüler",
	ViewSRLastUpdate: "Son güncelleme",
	ViewSRUpdatedBy: "Güncelleyen",
	ViewSRWorkLog: "İş Günlüğü",
	ViewSRWorkBanner: "Hizmet isteği için iş günlüğü. Notun ayrıntılarını görüntülemek için tablo satırını seçin.",
	ViewSRNoWorkl: "Görüntülenecek iş günlüğü yok",
	ViewSRCommLog: "İletişim Günlüğü",
	ViewSRCommBanner: "Hizmet isteği için iletişim günlüğü. Notun ayrıntılarını görüntülemek için tablo satırını seçin.",
	ViewSRNoComml: "Görüntülenecek iletişim günlüğü yok",
    //Venky : new
	ViewSolutionForSRPR: "Hizmet İsteği ve RR Çözümleri",
	ViewSRNoSol: "Görüntülenecek Çözüm yok",
	Symptom: "Belirti",
	Cause: "Neden",
	Resolution: "Çözüm",
	ViewSRSolDetails: "Hizmet İsteği Çözümü Ayrıntıları",
	ViewRRSolDetails: "İlgili Kayıtlar Çözümü Ayrıntıları",
	ViewSolutionForSRPRBanner: "Hizmet isteği ve ilgili kayıtlar çözümü",
	InvalidColumn1: "Sütunlar :",
	InvalidColumn2: "İsteklerim portletinde 'Tüm İsteklerimi Göster' iletişim kutusu için yapılandırılmış olan yukarıdaki sütunlar yok. Self Servis Merkezi uygulamasını düzenleyin ve sütunlar özelliğini düzeltin.",
	/* Bulletin Board */
    MyNewsHeading: "Haberlerim",
	Message: "İleti",
	PostDate: "Kaydetme Tarihi",
	PostBy: "Kaydeden",
	ExpireDate: "Süre Bitim Tarihi",
	ViewBBMessageDetails: "İleti Ayrıntıları",
	ViewBBMessageTitle: "Haberlerim Ayrıntıları",
	ViewBBMessageBanner: "Bu görev iletinin ayrıntılarını görüntüler",
	MsgViewed: "Görüntülendi mi?",
	
	/* LiveChat */
    LiveChatHeading: "Bize Ulaşın",
    LiveChatLink: "Şimdi Sohbet Et",
    LiveChatMessage: "<UL STYLE='margin-top:0px;margin-bottom:2px;list-style-type: none;'> <LI> Temsilciyle sohbet et</LI> <LI> Gün içinde 8:30 ile 16:00 arasında uygun</LI> <LI> <A HREF='http://pic.dhe.ibm.com/infocenter/tivihelp/v58r1/index.jsp' target='blank'>SmartCloud Control Desk Bilgileri </A></LI> </UL>",
     
	
	/* ITM Agent Statuses */
	noAgentState: "İzleme Programı Yok",
	onlineState: "İzleme Programı çevrimiçi",
	offlineState: "İzleme Programı çevrimdışı",
	toobusyState: "İzleme Programı yoğun olduğundan yanıt veremiyor",
	notconfiguredState: "İzleme Programı yapılandırılmamış",
	
	/* Approve Request */
	AppRequestBannerTitle: "Onay",
	AppRequestBannerDescription: "Onay için girişiniz bekleniyor. Nasıl yanıt vereceksiniz?",
	RejectRequest: "Bu isteği reddediyorum",
	ApproveRequest: "Bu isteği onaylıyorum",
	ApproveSummary: "Özet",
	ApproveDetails: "Ayrıntılar",
	
	ContextButtonSetLabelCreate: "Oluştur",
	
	copyright: "Lisanslı Malzeme - IBM Corp.'un Malıdır. &copy; IBM Corporation ve diğerleri 2009. IBM, IBM Corporation'ın ABD ve/veya diğer ülkelerdeki tescilli ticari markasıdır.",
	AboutCopyright: "Lisanslı Malzeme - IBM Corp.'ın Malıdır. &copy; Copyright IBM Corp. 2009. Her Hakkı Saklıdır. ABD Kamu Kullanıcıları İçin Sınırlı Haklar - Kullanımı, çoğaltılması ya da açıklanması, IBM Corp. ile yapılan GSA ADP Schedule Contact adlı sözleşmeyle sınırlanmıştır.",	
	

	// TSAM specific messages ------------------------------------------------------------
	MyDeploymentsHeading: "Projeler",

	//Project Details
	ProjectTitle: "Proje",
	ProjectDetails: "Proje Ayrıntıları",
	ProjectDetailsImage: "",
	ProjectName: "Proje Adı",
	ProjectDescription: "Proje Açıklaması",
	ProjectType: "Proje Tipi",
	ProjectStartDate: "Başlangıç Tarihi",
	ProjectEndDate: "Bitiş Tarihi",
	ProjectTeamAccess: "Ekip Erişimi",
	ProjectsDropDownEmptyLabel: "Bir proje seçin",	
	
	//WCA Projects
	WCAProjectTitle: "WebSphere CloudBurst Projesi",
	WCAProjectDetails: "WebSphere CloudBurst Projesi Ayrıntıları",
	WCAProjectPattern: "Kalıp Adı",
	WCAServerResourcesLegend: "Kaynaklar",
	WCAServerVirtualCPU: "Sanal CPU",
	WCAServerMemory: "Ana Bellek",
	WCAPatternSelection: "Bir CloudBurst Kalıbı Seçin",
	
	ServerGridName: "Sunucu Adı",
	ServerGridOS: "İşletim Sistemi",
	ServerGridStatus: "Durum",
	ServerGridMemory: "Bellek (%)",
	ServerGridCPU: "CPU (%)",
	ServerGridDisk: "Disk (%)",
	ServerGridTotalMemory: "Bellek",
	ServerGridTotalCPU: "CPU",
	ServerGridTotalDisk: "Disk",
	ServerGridLastUpdate: "Son Güncelleme",
	ServerGridHypervisor: "Hypervisor",
	WCAServerGridPart: "Parça",
	ProjectRequestedServers: "İstenen Sunucular",
	ProjectActiveServers: "Etkin Sunucular",
	
	ViewProjectGeneralLegend: "Genel",
	ViewProjectName: "Ad",
	ViewProjectDescription: "Açıklama",
	ViewProjectServiceOwner: "Hizmet Sahibi",
	ViewProjectType: "Proje Tipi",
	ViewProjectStartDate: "Başlangıç Tarihi",
	ViewProjectEndDate: "Bitiş Tarihi",
	ViewProjectTeamAccess: "Ekip Erişimi",
	ViewProjectRequestedServer: "İstenen Sunucular",
	ViewProjectActiveServers: "Etkin Sunucular",
	
	ViewProjectServersLegend: "Sunucular",
	ViewProjectServersTitle: "Sunucu",
	ViewProjectMasterImage: "Ana Görüntü",
	ViewProjectCreateDate: "Oluşturma Tarihi",
	ViewProjectCreatedBy: "Oluşturan",
	ViewProjectHypervisor: "Hypervisor",
	ViewProjectServerStatus: "Yetkilendirme Durumu",
	ViewProjectServerStatusLastUpdate: "Son yetkilendirme durumu güncellemesi",
	ViewProjectCPU: "CPU",
	ViewProjectVirtual: "Sanal",
	ViewProjectPhysical: "Fiziksel",
	ViewProjectMain: "Ana",
	ViewProjectSwap: "Değiş Tokuş Et",
	ViewProjectDisk: "Disk",
	ViewProjectLocal: "Yerel",
	ViewProjectAdditionalSoftware: "Ek Yazılım",
	ViewProjectMemory: "Bellek",
	ViewProjectServersTotal: "Toplam: ",
	ProjectUsed: "Proje adı zaten kullanılıyor.",

	CTJZH2304I: "CTJZH2304I: Bir sanal sunucu seçmelisiniz",
	CTJZH2310E: "CTJZH2310E: Proje ayrıntıları görüntülenemedi. Proje tanıtıcısı bulunamıyor.",
	CTJZH2311E: "CTJZH2311E: Bir iç hata nedeniyle proje ayrıntıları görüntülenemiyor.",
	CTJZH2312E: "CTJZH2312E: Proje ayrıntıları alınırken bir hata oluştu.",
	CTJZH2314E: "CTJZH2314E: Bu projenin ayrıntıları alınırken bir hata oluştu.",
	CTJZH2315E: "CTJZH2315E: Proje listesi alınamadı.",
	CTJZH2332E: "CTJZH2332E: Önerilen bellek değeri, minimum değerden küçük olamaz.",
    CTJZH2333E: "CTJZH2333E: Önerilen fiziksel CPU'lar, minimum fiziksel CPU'dan küçük olamaz.",
	CTJZH2340W: "CTJZH2340W: Ayırmanız için kullanılabilir başlangıç tarihleri listesi alınamadı.",
	CTJZH2341W: "CTJZH2341W: Seçili sunucunun zaten bir görüntüsü var. Yeni görüntü var olanın yerine geçecek.",
	CTJZH2343E: "CTJZH2343E: Önerilen kaynaklardan biri, karşılık gelen minimum kaynaktan küçük.",
	CTJZH2347E: "CTJZH2347E: Bu tarihlerde, bu parametrelere sahip kullanılabilir bir sunucu yok.",
	CTJZH2348E: "CTJZH2348E: {0} projesini iptal etmek üzeresiniz.",
	CTJZH2349E: "CTJZH2349E: {0} görüntüsünün kaydını kaldırmak üzeresiniz.",
	CTJZH2350E: "CTJZH2350E: {0} kullanıcısını kaldırmak üzeresiniz.",
	CTJZH2351E: "CTJZH2351E: {0} ekibini kaldırmak üzeresiniz.",
	CTJZH2352E: "CTJZH2352E: {0} sunucusunu kaldırmak üzeresiniz.",
	
	//SRM 721
	HelpFixDesc : "Sorununuz için bir Çözüm arayın. Çözüm bulunamazsa, sorunu çözmek için bir bildirim formu açın.",
    CTJZH2359I: "CTJZH2359I: Alışveriş Sepeti boş",
	CurrentCart:  "Geçerli Alışveriş Sepeti",
	More:  "Diğer",
    Cart:  "Alışveriş Sepeti",
	CreateSR:  "İstek Oluştur",
	CTJZH2360I: "CTJZH2360I: Tanımlı herhangi bir şablonunuz yok.",
	CTJZH2363I: "CTJZH2363I: Etkin çözüm ya da Self Servis Merkezi için etkinleştirilmiş çözüm yok.",

	//Help me fix an issue
	SubmitLabel : "Gönder",
	SearchTextLabel : "Arama Anahtar Sözcükleri",
	
	//Frequent Requests
	SystemWideFrequentRequest : "Sistem Genelinde Sık Yapılan İstek",
	MyFrequentRequests : "Sık Yaptığım İstekler",
	CTJZH2353E: "CTJZH2353E: Görüntülenecek Sık Yapılan İstek yok ",
	
	CreateSRLabel: "Sorun Bildir",
	
	SearchFieldText : "Çözümleri, Olanakları ve Hızlı Eklemeleri Ara",
	SearchFieldTextNoSol : "Olanak ve Hızlı Eklemeleri Ara",
	FolderView : "Klasör görünümü",
	TreeView : "Ağaç görünümü",
	Maximize : "Ekranı kapla",
	Minimize : "Önceki boyuta geri yükle",
	Folders :  "Hizmetler",
	SolutionFolders :  "Çözümler",
	
	dummy_: ""
  })
);



