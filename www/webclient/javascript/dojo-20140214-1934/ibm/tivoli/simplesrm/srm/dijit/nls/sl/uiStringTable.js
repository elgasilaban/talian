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
	Title: "Postaja za samopomoč Tivoli",
	About: "O programu",
	Help: "Pomoč",
	Logout: "Odjava",
	Welcome: "Dobrodošli",
	// Login widget
	LoginHeading: "Maximo Login",
	Username: "Uporabniško ime",
	Password: "Geslo",
	Login: "Prijava",
	InvalidLogin: "Uporabniško ime ali geslo je nepravilno. Poskusite znova.",
	NotAuthorized: "Niste pooblaščeni za uporabo te aplikacije",
	// MyCatalogRequestsGrid widget
	ShowSelectedDetails: "Pokaži podrobnosti izbrane vrstice",
	ApproveSelectedRequest: "Odobri izbrani zahtevek",
	RejectSelectedRequest: "Zavrni izbrani zahtevek",
	ShowDetails: "Pokaži podrobnosti",
	
	SRRequestPodHeading: "Moji zahtevki",	
	SRShowMyRequestsLink: "Pokaži vse moje zahtevke...",
	SRMyRequests: "Moji zahtevki",
	
	INCIDENTRequestPodHeading: "Moji incidenti",
	INCIDENTShowMyRequestsLink: "Pokaži vse moje incidente ...",
	INCIDENTMyRequests: "Moji incidenti",
	
	AssetsPodHeading: "Moja sredstva",	
	ShowMyAssetsLink: "Pokaži vsa moja sredstva ...",
	MyAssets: "Moja sredstva",
	
	ShowAllRequests: "Pokaži vse zahtevke",
	ShowLastRequests: "Pokaži zadnjih ${0} zahtevkov",
	ShowAllNews: "Pokaži vse novice",
	ShowLastNews: "Pokaži zadnjih ${0} novic",
	MyApprovalHeading: "Moje odobritve",	
	Refresh: "Osveži",
	// my catalog request grid column headings
	TotalCost: "Skupni stroški",
	StatusDate: "Čas statusa",
	RequestedBy: "Zahteval je",
	Status: "Status",
	Quantity: "Količina",
	UnitCost: "Stroški na enoto",
	Description: "Opis",
	ItemNum: "Tip zahtevka",
	RequestedFor: "Zahtevano za",
	ItemSetID: "ID nabora identov",
	DateEntered: "Datum vnosa",
	MRNum: "MRNUM",
	Priority: "Prioriteta",
	SiteID: "ID enote",
	MRLINEID: "ID MRLINE",
	// MyDeploymentsGrid
	Name: "Ime",
	ServiceOwner: "Lastnik storitve",
	//ChnageDate: "Change Date",
	DueDate: "Datum zapadlosti",
	CreatedDate: "Ustvarjeno",
	StartDate: "Ciljni začetek",
	OfferingDescription: "Opis zahtevka",
	Approval: "Odobritev",
	// Catalog Request Creator
	CatalogRequestCreateHeading: "Ustvari nov zahtevek",
	CatalogOfferingPrompt: "Ponudba kataloga storitev",
	CreateRequestStatus: "Zahtevek je bil uspešno predložen",
	CreateRequestButtonLabel: "V redu",
	CancelButtonLabel: "Prekliči",
	Location: "Lokacija",
	AssetNumber: "Številka sredstva",
	Serial: "Zaporedna številka", 
	IsPrimary: "Primarno",
	IsUser: "Uporabnik",
	IsCustodian: "Oskrbnik",		
	RefreshDate: "Datum osveževanja",
	PlannedRefreshDate: "Planirani datum osveževanja",
	ChangeDate: "Datum spremembe",
	AssetActivity: "Trenutna sredstva",
	
	// Navigator widget
	Home: "Domov",
	Back: "Nazaj", 
	Forward: "Naprej",
	HomeBreadcrumb: "Domov",
	Search: "Iskanje",
	SearchAdjust: "Prilagodite vaše iskanje",
	SearchResults: "Rezultati iskanja",
	Close: "Zapri",
	IncidentsLabel: "Pomoč za pomožno prijavo in podporo",
	IncidentsDesc: "Odprite pomožno prijavo napak za obstoječe sredstvo ali storitev.",
	RequestsLabel: "Zahtevek za novo storitev",
	RequestsDesc: "Zahtevek za novo sredstvo ali storitev.",
    IssuesLabel: "Prijavi težavo",
    IssuesDesc: "Ustvarite novo zahtevo za storitev, da prijavite težavo.",
    BrowseSolutionsLabel: "Prebrskaj rešitve",
    BrowseSolutionsDesc: "Oglejte si vse obstoječe rešitve.",
    
	RecentsLabel: "Pogosti zahtevki",
	RecentsDesc: "Lahek dostop do storitev, ki jih pogosto zahtevate.",
	HelpFixLabel: "Iskanje rešitev",
   SearchToolTip: "Za iskanje na osnovi ene ali druge besede uporabite presledek ali operator OR. Primer: protivirusna zaščita, protivirusna OR zaščita. Za iskanje na osnovi več kot ene obstoječe besede uporabite operator AND. Primer: lotus AND notes. Za natančno ujemanje postavite besede med dvojne narekovaje. Primer: \"lotus notes\".",
	createSRToolTip: "Ustvarite novo zahtevo za storitev, da prijavite težavo ali nekaj zahtevate.",
	templateToolTip: "Predloge vozička",
	
	None: "Brez",
	NA: "Brez",
	//branch in navigator tree
	Directory: "Imenik",
	//leaf in navigator tree
	Panel: "Okno",
	// DateRange Widget
	DurationLabel: "Za ta čas trajanja",
	MonthsLabel: "Meseci",
	WeeksLabel: "Tedni",
	DaysLabel: "Dnevi",
	ForeverLabel: "Nedoločeno",
	StartDateLabel: "Datum začetka",
	EndDateLabel: "Datum konca",
	StartTime: "Čas začetka",
	EndTime: "Čas konca",
	UntilLabel: "Do tega datuma",
	InvalidDurationMessage: "Trajanje mora biti večje od 0",
	InvalidDateMessage: "To ni veljaven datum",
	DateEarlyMessage: "Ta datum je pred ${0}, ki je najzgodnejši dopusten datum",
	DateLateMessage: "Ta datum je po ${0}, ki je zadnji dopusten datum",
	MissingDateMessage: "Ta datum je zahtevan",

	Loading: "Nalaganje...",
	RecentActivity: "Nedavna dejavnost",
	NoRecentActivity: "Ni nedavne dejavnosti",
    NoAssetsAssigned: "Ni dodeljenih sredstev",
	ManageRequests: "Upravljanje z zahtevki",
	ManageRequestsLink: "Upravljanje z zahtevki...",
	ManageApprovalsLink: "Upravljanje z odobritvami...",
	ManageMyNewsLink: "Prikaži moje novice...",
	ManageMyNews: "Ogled mojih novic",
	ManageApprovals: "Upravljanje z odobritvami",
    CartID: "ID nakupovalnega vozička",
	

	//General
	OK : "V redu",
	Cancel : "Prekliči",
	Select: "Izberi",
	Total: "Skupaj",
	TotalLabel: "Skupaj: ",
	ConfirmationProceed: "Ste prepričani, da želite nadaljevati?",
	ConfirmationDialogTitle: "Potrebna je potrditev",
	
	// error messages
	CTJZH2301E: "CTJZH2301E: Pri ustvarjanju vhodnega obrazca za ta zahtevek se je zgodila napaka.",
	CTJZH2302E: "CTJZH2302E: Pri priklicu podrobnosti tega zahtevka se je zgodila napaka.",
	CTJZH2303E: "CTJZH2303E: Za ustvarjanje zahtevka morate biti prijavljeni.",
		
	CTJZH2305E: "CTJZH2305E: Imate vhodna polja z neveljavnimi vrednostmi. Te napake morate odpraviti, preden nadaljujete.",
	CTJZH2306E: "CTJZH2306E: Sistem je sporočil napako pri ustvarjanju tega zahtevka.",
	CTJZH2307E: "CTJZH2307E: Pri vaši prijavi se je zgodila napaka.",
	CTJZH2308E: "CTJZH2308E: Oprostite, toda ustvarjanje tega zahtevka trenutno ni podprto.",
	CTJZH2309E: "CTJZH2309E: Zaradi notranje napake ni mogoče nadaljevati.",
		
	CTJZH2313E: "CTJZH2313E: Priklic seznama zahtev za storitev je spodletel.",
	CTJZH2360E: "CTJZH2360E: Preklic seznama sredstev je spodletel.",
		
	CTJZH2316E: "CTJZH2316E: Sporočilo za prikaz ima ničelno, nedefinirano ali prazno kodo, ali pa je neveljavnega tipa.",
	CTJZH2317E: "CTJZH2317E: Potrditev gesla se ne ujema.", 
	CTJZH2318E: "CTJZH2318E: Lahko izberete največ 5 ekip.",
	CTJZH2319E: "CTJZH2319E: Ime uporabnika že obstaja.",
	CTJZH2320E: "CTJZH2320E: Lahko izberete največ 15 uporabnikov.",
	CTJZH2321I: "CTJZH2321I: Za ta zahtevek ni podrobnosti za prikaz.",
	CTJZH2322E: "CTJZH2322E: Geslo se ne more začeti ali končati s presledkom.", 
	CTJZH2324E: "CTJZH2324E: Uporabniško ime vsebuje presledke.",	
	CTJZH2323E: "CTJZH2323E: Te zahteve za storitev ni mogoče predložiti, ker za ta tip ni registriranih področij virov.", 
	CTJZH2325E: "CTJZH2325E: Zahtevek ni več na razpolago.",
	CTJZH2328W: "CTJZH2328W: Brisanja uporabnika ni mogoče razveljaviti, ID-ja uporabnika pa ni mogoče ponovno uporabiti", 
	CTJZH2329E: "CTJZH2329E: Podani ID uporabnika pripada uporabniku, ki je bil zbrisan in ga ni mogoče ponovno uporabiti", 
	CTJZH2331E: "CTJZH2331E: Napaka pri obdelavi vašega izbranega zahtevka.",
		
    CTJZH2334E: "CTJZH2334E: Pri posodabljanju zahteve za storitev z dobavljenimi podatki je prišlo do napake",
	CTJZH2335E: "CTJZH2335E: Zgodila se je nepopravljiva strežniška napaka med ustvarjanjem te nove zahteve za storitev",
	CTJZH2336E: "CTJZH2336E: Vhod za Podrobnosti odobritve presega največjo dolžino 50 znakov.",	
	CTJZH2337E: "CTJZH2337E: Ni mogoče ustvariti nove zahteve za storitev, ker se zdi, da niste prijavljeni",
	CTJZH2338E: "CTJZH2338E: Pri ustvarjanju te nove zahteve za storitev se je zgodila strežniška napaka",
	CTJZH2339I: "CTJZH2339I: Oprostite, toda ni najdenih ujemanj.",
	
	CTJZH2342E: "CTJZH2342E: Pri ustvarjanju tega zahtevka je prišlo do napake.",
		
	CTJZH2345E: "CTJZH2345E: Te ekipe ne morete odstraniti, medtem ko ima dejavne projekte.",
	CTJZH2346E: "CTJZH2346E: Geslo mora biti dolgo najmanj 6 znakov",
	
	CTJZH2353I: "CTJZH2353I: Poskušate napraviti več kot je največje število sprememb ekipe (do 5), kolikor je dovoljeno v tem zahtevku. da napravite več kot 5 sprememb ekipe, ustvarite dodatne zahtevke za spremembo ekipe.",
	CTJZH2354I: "CTJZH2354I: Poskušate narediti več kot je največje število sprememb uporabnikov (do 15), kolikor je dovoljeno za ta zahtevek. Da naredite več kot 15 sprememb uporabnikov, ustvarite dodatne zahtevke za spremembo uporabnikov.",	
	
	CTJZH2355I: "CTJZH2355I: Podatki za iskalni indeks niso na voljo ali so pokvarjeni. Ponovno izvajajte časovno opravilo PmObjSearchCron.",
	CTJZH2356I: "CTJZH2356I: Vnesti morate iskalni niz",
	CTJZH2357I: "CTJZH2357I: Podatki za iskalni indeks se posodabljajo. Prosimo, poskusite znova pozneje.",
	CTJZH2358I: "CTJZH2358I:NODICTION",
	CTJZH2361I: "CTJZH2361I: Ni razpoložljivih ali dejavnih ponudb ali predlog za tega uporabnika. Preverite, ali je uporabnik pooblaščen za dostop do ponudb kataloga ali predlog prijave.",
	CTJZH2362I: "CTJZH2362I: Za omogočanje funkcij centra za samopomoč v Internet Explorer-ju, namestite vtičnik Silverlight: www.microsoft.com/getsilverlight/",

    	
	//String list for user and team
	//Role: "Role",
	//Language: "Language",
	Team: "Ekipa",
	UserTeams: "Uporabniške ekipe",
	
	//UserStatus: "Activate user account",
	LOGINID: "Prijavni ID",
	AccountLegend: "Nastavitve računa",
	PersonalInfoLegend: "Osebne informacije",
	RegionalSettLegend: "Področne nastavitve",
	FirstName: "Ime",
	LastName: "Priimek",
	DisplayName: "Ime za prikaz",
	Email: "E-pošta",
	Telephone: "Telefon",
	Address: "Naslov",
	City: "Kraj",
	State: "Stanje",
	Country: "Država",
	AccountStatus: "Aktivno",
	EmptyString: "               ",
	UserList: "Razpoložljivi uporabniki",
	UserID: "ID uporabnika",
	Role: "Vloga",
	ConfirmPassword: "Potrditev gesla",
	InvalidConfirmPassword: "Geslo se ne ujema",
	PressToAddTeam: "Pritisnite + za dodajanje ekipe",
	CreateUserInstruction: "Uporabnika lahko dodate v do 5 ekip na zahtevek. Da dodate uporabnika v več ekip, ustvarite dodatne zahtevke za uporabnika.",
	ModifyUserInstruction: "Uporabnika lahko dodate ali odstranite iz do 5 ekip na zahtevek. Da naredite dodatne spremembe, ustvarite dodatne zahtevke za spremembo uporabnikov.",
	// Team Management
	TeamID: "ID",
	TeamName: "Ime",
	TeamDescription: "Opis",
	UserList: "Razpoložljivi uporabniki",
	SelectedUserList: "Izbrani uporabniki",
	TeamDetails: "Podrobnosti o ekipi",
	ProjectAccount: "Račun projekta",
	QuickFilter: "hitri filter",
	TeamNameExists: "Ekipa z istim imenom že obstaja.",
	CreateTeamInstruction: "Ekipa lahko vsebuje do 15 uporabnikov na zahtevek. Da dodate več uporabnikov ekipi, ustvarite dodatne zahtevke za spremembo ekipe.",
	ModifyTeamInstruction: "Lahko dodate ali odstranite do 15 uporabnikov iz ekipe na zahtevek. Da dodate dodatne spremembe, ustvarite dodatne zahtevke za spremembo ekipe.",

	Yes: "Da",
	No: "Ne",
	UserExist: "Uporabnik že obstaja",
	MaxTeamsExceed: "Presega največjo dolžino za ekipo",
	PreviewCloseTitle: "Zapri razdelek",
	PreviewOpenTitle: "Odpri razdelek",

	/* Service Request details */
	Application: "Aplikacija",
	CreatedOn: "Ustvarjeno na",
	Date: "Datum",
	Details: "Podrobnosti",
	From: "Od",
	Subject: "Zadeva",
	Summary: "Povzetek",
	FailedStatus: "Neuspešno",
	To: "Na",
	ViewSRDetails: "Podrobnosti o zahtevku",
	ViewSRTitle: "Ogled zahteve za storitev",
	ViewSRGeneral: "Splošno",
	ViewSRGenBannerApproval: "To opravilo vam omogoča odobritev ali zavrnitev zahteve za storitev",
	ViewSRGenBannerNoApproval: "To opravilo prikazuje podrobnosti zahteve za storitev",
	ViewSRLastUpdate: "Zadnja posodobitev",
	ViewSRUpdatedBy: "Posodobil",
	ViewSRWorkLog: "Dnevnik dela",
	ViewSRWorkBanner: "Dnevnik dela za zahtevo za storitev Izberite vrstico tabele, če si želite ogledati podrobnosti o opombi.",
	ViewSRNoWorkl: "Ni dnevnika dela za prikaz",
	ViewSRCommLog: "Komunikacijski dnevnik",
	ViewSRCommBanner: "Komunikacijski dnevnik za zahtevo za storitev. Izberite vrstico tabele, če si želite ogledati podrobnosti o opombi.",
	ViewSRNoComml: "Ni komunikacijskega dnevnika za prikaz",
    //Venky : new
	ViewSolutionForSRPR: "Rešitve za zahteve za storitev in s tem povezane zapise",
	ViewSRNoSol: "Ni rešitev za prikaz",
	Symptom: "Simptom",
	Cause: "Vzrok",
	Resolution: "Razrešitev",
	ViewSRSolDetails: "Podrobnosti rešitve to zahtevo za storitev",
	ViewRRSolDetails: "Podrobnosti rešitve za s tem povezane zapise",
	ViewSolutionForSRPRBanner: "Rešitev za zahtevo za storitev in s tem povezane zapise.",
	InvalidColumn1: "Stolpci :",
	InvalidColumn2: "konfigurirani za pogovorno okno 'Pokaži vse moje zahtevke' v prikazu Moji zahtevki, ne obstajajo. Uredite aplikacijo Center za samopomoč in popravite lastnosti stolpcev.",
	/* Bulletin Board */
    MyNewsHeading: "Moje novice",
	Message: "Sporočilo",
	PostDate: "Datum objave",
	PostBy: "Objavil",
	ExpireDate: "Datum poteka",
	ViewBBMessageDetails: "Podrobnosti o sporočilih",
	ViewBBMessageTitle: "Podrobnosti mojih novic",
	ViewBBMessageBanner: "To opravilo prikaže podrobnosti za sporočilo",
	MsgViewed: "Ogledano?",
	
	/* LiveChat */
    LiveChatHeading: "Stik z nami ",
    LiveChatLink: "Začni klepet",
    LiveChatMessage: "<UL STYLE='margin-top:0px;margin-bottom:2px;list-style-type: none;'> <LI> Klepet z agentom</LI> <LI> Na voljo vsak dan - od 8:30 do 18:00 EST</LI> <LI> <A HREF='http://pic.dhe.ibm.com/infocenter/tivihelp/v58r1/index.jsp' target='blank'>Informacije o aplikaciji SmartCloud Control Desk </A></LI> </UL>",
     
	
	/* ITM Agent Statuses */
	noAgentState: "Ni Nadzornika",
	onlineState: "Nadzornik je povezan",
	offlineState: "Nadzornik ni povezan",
	toobusyState: "Nadzornik je prezaseden za odgovor",
	notconfiguredState: "Nadzornik ni konfiguriran",
	
	/* Approve Request */
	AppRequestBannerTitle: "Odobritev",
	AppRequestBannerDescription: "Odobritev čaka na vaš vnos. Kakšen je vaš glas?",
	RejectRequest: "Ta zahtevek zavračam",
	ApproveRequest: "Odobravam ta zahtevek",
	ApproveSummary: "Povzetek",
	ApproveDetails: "Podrobnosti",
	
	ContextButtonSetLabelCreate: "Ustvari",
	
	copyright: "Licenčno gradivo - lastnina IBM Corp. &copy; IBM Corporation and other(s) 2009. IBM je registrirana blagovna znamka IBM Corporation v Združenih državah, v drugih državah ali v obojih.",
	AboutCopyright: "Licenčno gradivo – lastnina IBM Corp. &copy; Copyright IBM Corp. 2009. Vse pravice so pridržane. Omejene pravice uporabnikov ameriške vlade – uporaba, kopiranje ali razkrivanje je omejeno s terminsko pogodbo GSA ADP z družbo IBM.",	
	

	// TSAM specific messages ------------------------------------------------------------
	MyDeploymentsHeading: "Projekti",

	//Project Details
	ProjectTitle: "Projekt",
	ProjectDetails: "Podrobnosti projekta",
	ProjectDetailsImage: "",
	ProjectName: "Ime projekta",
	ProjectDescription: "Opis projekta",
	ProjectType: "Tip projekta",
	ProjectStartDate: "Datum začetka",
	ProjectEndDate: "Datum konca",
	ProjectTeamAccess: "Ekipni dostop",
	ProjectsDropDownEmptyLabel: "Izberite projekt",	
	
	//WCA Projects
	WCAProjectTitle: "Projekt WebSphere CloudBurst",
	WCAProjectDetails: "Podrobnosti projekta WebSphere CloudBurst",
	WCAProjectPattern: "Ime vzorca",
	WCAServerResourcesLegend: "Viri",
	WCAServerVirtualCPU: "Navidezna CPE",
	WCAServerMemory: "Glavni pomnilnik",
	WCAPatternSelection: "Izberite vzorec CloudBurst",
	
	ServerGridName: "Ime strežnika",
	ServerGridOS: "Operacijski sistem",
	ServerGridStatus: "Status",
	ServerGridMemory: "Pomnilnik (%)",
	ServerGridCPU: "CPE (%)",
	ServerGridDisk: "Disk (%)",
	ServerGridTotalMemory: "Pomnilnik",
	ServerGridTotalCPU: "CPE",
	ServerGridTotalDisk: "Disk",
	ServerGridLastUpdate: "Zadnja posodobitev",
	ServerGridHypervisor: "Hypervisor",
	WCAServerGridPart: "Del",
	ProjectRequestedServers: "Zahtevani strežnik(i)",
	ProjectActiveServers: "Aktivni strežnik(i)",
	
	ViewProjectGeneralLegend: "Splošno",
	ViewProjectName: "Ime",
	ViewProjectDescription: "Opis",
	ViewProjectServiceOwner: "Lastnik storitve",
	ViewProjectType: "Tip projekta",
	ViewProjectStartDate: "Datum začetka",
	ViewProjectEndDate: "Datum konca",
	ViewProjectTeamAccess: "Ekipni dostop",
	ViewProjectRequestedServer: "Zahtevani strežniki",
	ViewProjectActiveServers: "Aktivni strežniki",
	
	ViewProjectServersLegend: "Strežniki",
	ViewProjectServersTitle: "Strežnik",
	ViewProjectMasterImage: "Glavna slika",
	ViewProjectCreateDate: "Datum izdelave",
	ViewProjectCreatedBy: "Ustvaril",
	ViewProjectHypervisor: "Hypervisor",
	ViewProjectServerStatus: "Status preskrbe",
	ViewProjectServerStatusLastUpdate: "Zadnja posodobitev statusa preskrbe",
	ViewProjectCPU: "CPE",
	ViewProjectVirtual: "Navidezno",
	ViewProjectPhysical: "Fizično",
	ViewProjectMain: "Glavno",
	ViewProjectSwap: "Izmenjalno",
	ViewProjectDisk: "Disk",
	ViewProjectLocal: "Lokalno",
	ViewProjectAdditionalSoftware: "Dodatna programska oprema",
	ViewProjectMemory: "Pomnilnik",
	ViewProjectServersTotal: "Skupaj: ",
	ProjectUsed: "Ime projekta je že v uporabi.",

	CTJZH2304I: "CTJZH2304I: Izbrati morate navidezni strežnik",
	CTJZH2310E: "CTJZH2310E: Prikaz projektnih podrobnosti je spodletel. Ni mogoče najti ID projekta.",
	CTJZH2311E: "CTJZH2311E: Zaradi notranje napake ni mogoče prikazati projektne podrobnosti.",
	CTJZH2312E: "CTJZH2312E: Pri pridobivanju podrobnosti projekta je prišlo do napake.",
	CTJZH2314E: "CTJZH2314E: Pri priklicu podrobnosti tega projekta je prišlo do napake.",
	CTJZH2315E: "CTJZH2315E: Priklic seznama projektov je spodletel.",
	CTJZH2332E: "CTJZH2332E: Priporočena vrednost pomnilnika ne more biti manjša od njegove najmanjše vrednosti.",
    CTJZH2333E: "CTJZH2333E: Priporočene fizične CPE ne morejo biti manjše od najmanjše fizične CPE.",
	CTJZH2340W: "CTJZH2340W: Pridobivanje seznama razpoložljivih datumov začetka za vašo rezervacijo je spodletelo.",
	CTJZH2341W: "CTJZH2341W: Izbrani strežnik že ima sliko. Nova slika bo zamenjala obstoječo.",
	CTJZH2343E: "CTJZH2343E: Eden od priporočenih virov je manjši od ustreznega najmanjšega vira.",
	CTJZH2347E: "CTJZH2347E: Na te datume ni na razpolago noben strežnik s temi parametri.",
	CTJZH2348E: "CTJZH2348E: Preklicali boste {0} projekt.",
	CTJZH2349E: "CTJZH2349E: Preklicali boste registracijo slike {0}.",
	CTJZH2350E: "CTJZH2350E: Odstranili boste uporabnika {0}.",
	CTJZH2351E: "CTJZH2351E: Odstranili boste ekipo {0}.",
	CTJZH2352E: "CTJZH2352E: Odstranili boste strežnik {0}.",
	
	//SRM 721
	HelpFixDesc : "Poiščite rešitev za vašo težavo. Odprite prijavo napake, da razrešite težavo, če ne najdete rešitve.",
    CTJZH2359I: "CTJZH2359I: nakupovalni voziček je prazen",
	CurrentCart:  "Trenutni voziček",
	More:  "več",
    Cart:  "Voziček",
	CreateSR:  "Ustvari zahtevek",
	CTJZH2360I: "CTJZH2360I: Ni definiranih predlog.",
	CTJZH2363I: "CTJZH2363I: Ni aktivnih rešitev ali rešitev, omogočenih za center za samopomoč.",

	//Help me fix an issue
	SubmitLabel : "Predloži",
	SearchTextLabel : "Ključne besede za iskanje",
	
	//Frequent Requests
	SystemWideFrequentRequest : "Pogosti zahtevki za cel sistem",
	MyFrequentRequests : "Moji pogosti zahtevki",
	CTJZH2353E: "CTJZH2353E: Pogosti zahtevki za prikaz ne obstajajo ",
	
	CreateSRLabel: "Prijavi težavo",
	
	SearchFieldText : "Iskanje rešitev, ponudbe in hitrih vstavljanj",
	SearchFieldTextNoSol : "Iskanje ponudbe in hitrih vstavljanj",
	FolderView : "Pogled mape",
	TreeView : "Drevesni pogled",
	Maximize : "Maksimiraj",
	Minimize : "Obnovi",
	Folders :  "Storitve",
	SolutionFolders :  "Rešitve",
	
	dummy_: ""
  })
);



