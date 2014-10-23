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
	Title: "Stazione Tivoli Self-service",
	About: "Informazioni su",
	Help: "Guida",
	Logout: "Uscita",
	Welcome: "Benvenuti",
	// Login widget
	LoginHeading: "Accesso Maximo",
	Username: "Nome utente",
	Password: "Password",
	Login: "Connessione",
	InvalidLogin: "Nome utente o password non corretti. Riprovare.",
	NotAuthorized: "L'utente non è autorizzato ad eseguire questa applicazione",
	// MyCatalogRequestsGrid widget
	ShowSelectedDetails: "Mostra dettagli della riga selezionata",
	ApproveSelectedRequest: "Approva richiesta selezionata",
	RejectSelectedRequest: "Rifiuta la richiesta selezionata",
	ShowDetails: "Mostra dettagli",
	
	SRRequestPodHeading: "Richieste personali",	
	SRShowMyRequestsLink: "Mostra tutte le richieste personali...",
	SRMyRequests: "Richieste personali",
	
	INCIDENTRequestPodHeading: "Incidenti personali",
	INCIDENTShowMyRequestsLink: "Mostra tutti gli incidenti personali...",
	INCIDENTMyRequests: "Incidenti personali",
	
	AssetsPodHeading: "Asset personali",	
	ShowMyAssetsLink: "Mostra tutti gli asset personali...",
	MyAssets: "Asset personali",
	
	ShowAllRequests: "Mostra tutte le richieste",
	ShowLastRequests: "Mostra ultime ${0} richieste",
	ShowAllNews: "Mostra tutte le notizie",
	ShowLastNews: "Mostra ultime ${0} notizie",
	MyApprovalHeading: "Approvazioni personali",	
	Refresh: "Aggiorna",
	// my catalog request grid column headings
	TotalCost: "Costo totale",
	StatusDate: "Data stato",
	RequestedBy: "Richiesto da",
	Status: "Stato",
	Quantity: "Quantità",
	UnitCost: "Costo unitario",
	Description: "Descrizione",
	ItemNum: "Tipo di richiesta",
	RequestedFor: "Richiesto per",
	ItemSetID: "ID serie di item",
	DateEntered: "Data di immissione",
	MRNum: "NUMRDM",
	Priority: "Priorità",
	SiteID: "ID sede",
	MRLINEID: "ID MRLINE",
	// MyDeploymentsGrid
	Name: "Nome",
	ServiceOwner: "Proprietario del servizio",
	//ChnageDate: "Change Date",
	DueDate: "Scadenza",
	CreatedDate: "Creato",
	StartDate: "Inizio previsto",
	OfferingDescription: "Descrizione richiesta",
	Approval: "Approvazione",
	// Catalog Request Creator
	CatalogRequestCreateHeading: "Crea una nuova richiesta",
	CatalogOfferingPrompt: "Offerta di Service Catalog",
	CreateRequestStatus: "Richiesta inoltrata correttamente",
	CreateRequestButtonLabel: "OK",
	CancelButtonLabel: "Annulla",
	Location: "Collocazione",
	AssetNumber: "Numero asset",
	Serial: "Numero seriale", 
	IsPrimary: "Principale",
	IsUser: "Utente",
	IsCustodian: "Custode",		
	RefreshDate: "Data di aggiornamento",
	PlannedRefreshDate: "Data di aggiornamento pianificata",
	ChangeDate: "Data di modifica",
	AssetActivity: "Asset correnti",
	
	// Navigator widget
	Home: "Home",
	Back: "Indietro", 
	Forward: "Avanti",
	HomeBreadcrumb: "Home",
	Search: "Ricerca",
	SearchAdjust: "Modifica la ricerca",
	SearchResults: "Risultati della ricerca",
	Close: "Chiudi",
	IncidentsLabel: "Gestione ticket di assistenza e supporto",
	IncidentsDesc: "Aprire un ticket di assistenza per un asset o servizio esistente.",
	RequestsLabel: "Richiedi un nuovo servizio",
	RequestsDesc: "Richiedere un nuovo asset o servizio.",
    IssuesLabel: "Segnala un problema",
    IssuesDesc: "Creare una nuova Richiesta di servizio per segnalare un problema.",
    BrowseSolutionsLabel: "Sfoglia soluzioni",
    BrowseSolutionsDesc: "Visualizza tutte le soluzioni esistenti",
    
	RecentsLabel: "Richieste frequenti",
	RecentsDesc: "Accesso rapido ai servizi richiesti con maggiore frequenza.",
	HelpFixLabel: "Ricerca soluzioni",
   SearchToolTip: "Per eseguire la ricerca in base ad una o più parole, utilizzare uno spazio o l'operatore OR. Esempio: protezione virus, protezione OR virus. Per eseguire la ricerca in base a più parole esistenti, utilizzare l'operatore AND. Esempio: lotus AND notes. Per una corrispondenza esatta, utilizzare i doppi apici intorno alle parole. Esempio: \"lotus notes\".",
	createSRToolTip: "Creare una nuova Richiesta di servizio per segnalare un problema o richiedere qualcosa.",
	templateToolTip: "Modelli di carrelli",
	
	None: "Nessuno",
	NA: "N/D",
	//branch in navigator tree
	Directory: "Directory",
	//leaf in navigator tree
	Panel: "Pannello",
	// DateRange Widget
	DurationLabel: "Per questa durata",
	MonthsLabel: "Mesi",
	WeeksLabel: "Settimane",
	DaysLabel: "Giorni",
	ForeverLabel: "Indefinito",
	StartDateLabel: "Data di inizio",
	EndDateLabel: "Data di fine",
	StartTime: "Ora di inizio",
	EndTime: "Ora di fine",
	UntilLabel: "Fino a questa data",
	InvalidDurationMessage: "La durata deve essere maggiore di 0",
	InvalidDateMessage: "Questa non è una data valida.",
	DateEarlyMessage: "Questa data è prima del ${0}, la prima data ammissibile",
	DateLateMessage: "Questa data è dopo il ${0}, l'ultima data ammissibile",
	MissingDateMessage: "Questa data è obbligatoria",

	Loading: "Caricamento...",
	RecentActivity: "Attività recente",
	NoRecentActivity: "Nessuna attività recente",
    NoAssetsAssigned: "Nessun asset assegnato",
	ManageRequests: "Gestisci richieste",
	ManageRequestsLink: "Gestisci richieste...",
	ManageApprovalsLink: "Gestisci approvazioni...",
	ManageMyNewsLink: "Visualizza notizie personali...",
	ManageMyNews: "Visualizza notizie personali",
	ManageApprovals: "Gestisci approvazioni",
    CartID: "ID carrello",
	

	//General
	OK : "OK",
	Cancel : "Annulla",
	Select: "Selezione",
	Total: "Totale",
	TotalLabel: "Totale: ",
	ConfirmationProceed: "Si è sicuri di voler continuare?",
	ConfirmationDialogTitle: "Richiesta conferma",
	
	// error messages
	CTJZH2301E: "CTJZH2301E: Si è verificato un errore durante la creazione del modulo di input per questa richiesta.",
	CTJZH2302E: "CTJZH2302E: Si è verificato un errore durante il richiamo dei dettagli di questa richiesta.",
	CTJZH2303E: "CTJZH2303E: È necessario aver eseguito l'accesso per creare una richiesta.",
		
	CTJZH2305E: "CTJZH2305E: I campi di input contengono valori non validi. È necessario correggere questi errori prima di continuare.",
	CTJZH2306E: "CTJZH2306E: Il sistema ha segnalato un errore nella creazione di questa richiesta.",
	CTJZH2307E: "CTJZH2307E: Si è verificato un errore durante l'accesso.",
	CTJZH2308E: "CTJZH2308E: La creazione di questa richiesta non è attualmente supportata.",
	CTJZH2309E: "CTJZH2309E: Impossibile continuare a causa di un errore interno.",
		
	CTJZH2313E: "CTJZH2313E: Richiamo dell'elenco di richieste di servizio non riuscito.",
	CTJZH2360E: "CTJZH2360E: Impossibile richiamare l'elenco di asset.",
		
	CTJZH2316E: "CTJZH2316E: Il messaggio da visualizzare ha codice null, non definito o vuoto oppure il tipo non è valido.",
	CTJZH2317E: "CTJZH2317E: La conferma password non corrisponde.", 
	CTJZH2318E: "CTJZH2318E: È possibile selezionare un massimo di 5 team.",
	CTJZH2319E: "CTJZH2319E: Il nome utente esiste già.",
	CTJZH2320E: "CTJZH2320E: È possibile selezionare un massimo di 15 utenti.",
	CTJZH2321I: "CTJZH2321I: Nessun dettaglio da visualizzare per questa richiesta.",
	CTJZH2322E: "CTJZH2322E: La password non può iniziare o terminare con uno spazio.", 
	CTJZH2324E: "CTJZH2324E: Il nome utente contiene spazi.",	
	CTJZH2323E: "CTJZH2323E: Questa richiesta di servizio non può essere inoltrata perché non ci sono pool di risorse di questo tipo registrati.", 
	CTJZH2325E: "CTJZH2325E: La richiesta non è più disponibile.",
	CTJZH2328W: "CTJZH2328W: L'eliminazione dell'utente non può essere annullata e non sarà più possibile utilizzare l'ID utente", 
	CTJZH2329E: "CTJZH2329E: L'ID utente specificato appartiene ad un utente eliminato e non può essere utilizzato nuovamente", 
	CTJZH2331E: "CTJZH2331E: Errore durante l'elaborazione della richiesta selezionata dall'utente.",
		
    CTJZH2334E: "CTJZH2334E: Si è verificato un errore server durante l'aggiornamento di questa nuova richiesta di servizio con i dati forniti",
	CTJZH2335E: "CTJZH2335E: Si è verificato un errore server irreversibile durante la creazione di questa nuova richiesta di servizio",
	CTJZH2336E: "CTJZH2336E: L'input dettagli di approvazione supera la lunghezza massima di 50 caratteri.",	
	CTJZH2337E: "CTJZH2337E: Non è possibile creare una nuova richiesta di servizio perché l'utente non sembra collegato",
	CTJZH2338E: "CTJZH2338E: Si è verificato un errore server durante la creazione di questa nuova richiesta di servizio",
	CTJZH2339I: "CTJZH2339I: Nessuna corrispondenza trovata.",
	
	CTJZH2342E: "CTJZH2342E: Si è verificato un errore durante la creazione di questa richiesta.",
		
	CTJZH2345E: "CTJZH2345E: Non è possibile rimuovere questo team mentre ha progetti attivi.",
	CTJZH2346E: "CTJZH2346E: La password deve contenere almeno 6 caratteri",
	
	CTJZH2353I: "CTJZH2353I: Si sta tentando di apportare un numero di modifiche al team superiore al numero massimo (fino a 5) consentito in questa richiesta. Per apportare più di 5 modifiche al team, creare ulteriori richieste di modifica team.",
	CTJZH2354I: "CTJZH2354I: Si sta tentando di apportare un numero di modifiche utente superiore al numero massimo (fino a 15) consentito in questa richiesta. Per apportare più di 15 modifiche utente, creare ulteriori richieste di modifica utente.",	
	
	CTJZH2355I: "CTJZH2355I: Dati dell'indice di ricerca non disponibili o danneggiati. Eseguire nuovamente la crontak PmObjSearchCron.",
	CTJZH2356I: "CTJZH2356I: È necessario immettere una stringa di ricerca",
	CTJZH2357I: "CTJZH2357I: I dati dell'indice di ricerca sono in fase di aggiornamento. Riprovare successivamente.",
	CTJZH2358I: "CTJZH2358I:NODICTION",
	CTJZH2361I: "CTJZH2361I: Non ci sono offerte o modelli disponibili o attivi per questo utente. Controllare se l'utente è autorizzato a accedere a offerte di catalogo o modelli di ticket.",
	CTJZH2362I: "CTJZH2362I: Per abilitare tutte le funzioni del Centro Self Service in Internet Explorer, installare il plugin Silverlight: www.microsoft.com/getsilverlight/",

    	
	//String list for user and team
	//Role: "Role",
	//Language: "Language",
	Team: "Team",
	UserTeams: "Team dell'utente",
	
	//UserStatus: "Activate user account",
	LOGINID: "ID login",
	AccountLegend: "Impostazioni account",
	PersonalInfoLegend: "Informazioni personali",
	RegionalSettLegend: "Impostazioni internazionali",
	FirstName: "Nome",
	LastName: "Cognome",
	DisplayName: "Nome visualizzato",
	Email: "E-mail",
	Telephone: "Telefono",
	Address: "Indirizzo",
	City: "Città",
	State: "Stato",
	Country: "Paese",
	AccountStatus: "Attivo",
	EmptyString: "               ",
	UserList: "Utenti disponibili",
	UserID: "ID utente",
	Role: "Ruolo",
	ConfirmPassword: "Conferma Password",
	InvalidConfirmPassword: "La conferma password non corrisponde",
	PressToAddTeam: "Premere + per aggiungere un team",
	CreateUserInstruction: "È possibile aggiungere un utente ad un numero massimo di 5 team per richiesta. Per aggiungere un utente ad un numero superiore di team, creare ulteriori richieste di modifica utente.",
	ModifyUserInstruction: "Un utente può essere aggiunto o rimosso da un massimo di 5 team per richiesta. Per eseguire ulteriori modifiche, creare ulteriori richieste Modifica utente.",
	// Team Management
	TeamID: "ID",
	TeamName: "Nome",
	TeamDescription: "Descrizione",
	UserList: "Utenti disponibili",
	SelectedUserList: "Utenti selezionati",
	TeamDetails: "Dettagli sul team",
	ProjectAccount: "Account progetto",
	QuickFilter: "filtro rapido",
	TeamNameExists: "Un team con lo stesso nome esiste già.",
	CreateTeamInstruction: "Un team può includere fino a 15 utenti per richiesta. Per aggiungere ulteriori utenti a un team, creare ulteriori richieste Modifica team.",
	ModifyTeamInstruction: "È possibile aggiungere o rimuovere fino a 15 utenti per richiesta da un team. Per eseguire ulteriori modifiche, creare ulteriori richieste Modifica team.",

	Yes: "Sì",
	No: "No",
	UserExist: "L'utente già esiste",
	MaxTeamsExceed: "Supera la lunghezza massima per il team",
	PreviewCloseTitle: "Chiudi sezione",
	PreviewOpenTitle: "Apri sezione",

	/* Service Request details */
	Application: "Applicazione",
	CreatedOn: "Creato il",
	Date: "Data",
	Details: "Dettagli",
	From: "Da",
	Subject: "Oggetto",
	Summary: "Riepilogo",
	FailedStatus: "Non riuscito",
	To: "A",
	ViewSRDetails: "Dettagli richiesta",
	ViewSRTitle: "Visualizza richiesta di servizio",
	ViewSRGeneral: "Generale",
	ViewSRGenBannerApproval: "Questa attività consente di approvare o rifiutare una richiesta di servizio",
	ViewSRGenBannerNoApproval: "Questa attività visualizza i dettagli della richiesta di servizio",
	ViewSRLastUpdate: "Ultimo aggiornamento",
	ViewSRUpdatedBy: "Aggiornato da",
	ViewSRWorkLog: "Registro lavori",
	ViewSRWorkBanner: "Registro lavori per la richiesta di servizio. Selezionare la riga di tabella per visualizzare i dettagli della nota.",
	ViewSRNoWorkl: "Nessun registro lavori da visualizzare",
	ViewSRCommLog: "Registro comunicazioni",
	ViewSRCommBanner: "Registro comunicazioni per la richiesta di servizio. Selezionare la riga di tabella per visualizzare i dettagli della nota.",
	ViewSRNoComml: "Nessun registro comunicazioni da visualizzare",
    //Venky : new
	ViewSolutionForSRPR: "Soluzioni per RdS e RR",
	ViewSRNoSol: "Nessuna soluzione da visualizzare",
	Symptom: "Sintomo",
	Cause: "Causa",
	Resolution: "Risoluzione",
	ViewSRSolDetails: "Dettagli soluzione RdS",
	ViewRRSolDetails: "Dettagli soluzione RR",
	ViewSolutionForSRPRBanner: "Soluzione per la richiesta di servizio e i record correlati.",
	InvalidColumn1: "Le colonne :",
	InvalidColumn2: "configurate per la finestra di dialogo 'Mostra tutte le richieste personali' nel pod Richieste personali non esistono. Modificare l'applicazione Centro Self Service e impostare le colonne correttamente.",
	/* Bulletin Board */
    MyNewsHeading: "Notizie personali",
	Message: "Messaggio",
	PostDate: "Data invio",
	PostBy: "Inviato da",
	ExpireDate: "Data di scadenza",
	ViewBBMessageDetails: "Dettagli messaggio",
	ViewBBMessageTitle: "Dettagli di Notizie personali",
	ViewBBMessageBanner: "Questa attività visualizza i dettagli per il messaggio",
	MsgViewed: "Visualizzato?",
	
	/* LiveChat */
    LiveChatHeading: "Contattaci",
    LiveChatLink: "Avvia chat adesso",
    LiveChatMessage: "<UL STYLE='margin-top:0px;margin-bottom:2px;list-style-type: none;'> <LI> Chat con un agente</LI> <LI> Disponibile ogni giorno - dalle 8:30 alle 18:00 EST</LI> <LI> <A HREF='http://pic.dhe.ibm.com/infocenter/tivihelp/v58r1/index.jsp' target='blank'>Informazioni su SmartCloud Control Desk</A></LI> </UL>",
     
	
	/* ITM Agent Statuses */
	noAgentState: "Nessun monitor",
	onlineState: "Monitor in linea",
	offlineState: "Monitor non in linea",
	toobusyState: "Monitor troppo occupato per rispondere",
	notconfiguredState: "Monitor non configurato",
	
	/* Approve Request */
	AppRequestBannerTitle: "Approvazione",
	AppRequestBannerDescription: "Un'approvazione è in attesa di immissione. Come si desidera votare?",
	RejectRequest: "Rifiuto questa richiesta",
	ApproveRequest: "Approvo questa richiesta",
	ApproveSummary: "Riepilogo",
	ApproveDetails: "Dettagli",
	
	ContextButtonSetLabelCreate: "Crea",
	
	copyright: "Materiale su licenza - Proprietà di IBM Corp. &copy; IBM Corporation e altri 2009. IBM è un marchio registrato di IBM Corporation negli Stati Uniti e/o in altri paesi.",
	AboutCopyright: "Materiali su licenza - Proprietà di IBM Corp. &copy; Copyright IBM Corp. 2009. Tutti i diritti riservati. Diritti limitati degli utenti del Governo degli Stati uniti - Uso, copia o divulgazione limitati da GSA ADP Schedule Contact con IBM Corp.",	
	

	// TSAM specific messages ------------------------------------------------------------
	MyDeploymentsHeading: "Progetti",

	//Project Details
	ProjectTitle: "Progetto",
	ProjectDetails: "Dettagli sul progetto",
	ProjectDetailsImage: "",
	ProjectName: "Nome progetto",
	ProjectDescription: "Descrizione progetto",
	ProjectType: "Tipo di progetto",
	ProjectStartDate: "Data di inizio",
	ProjectEndDate: "Data di fine",
	ProjectTeamAccess: "Accesso al team",
	ProjectsDropDownEmptyLabel: "Selezionare un progetto",	
	
	//WCA Projects
	WCAProjectTitle: "Progetto WebSphere CloudBurst",
	WCAProjectDetails: "Dettagli progetto WebSphere CloudBurst",
	WCAProjectPattern: "Nome modello",
	WCAServerResourcesLegend: "Risorse",
	WCAServerVirtualCPU: "CPU virtuale",
	WCAServerMemory: "Memoria principale",
	WCAPatternSelection: "Selezionare un modello CloudBurst",
	
	ServerGridName: "Nome server",
	ServerGridOS: "Sistema operativo",
	ServerGridStatus: "Stato",
	ServerGridMemory: "Memoria (%)",
	ServerGridCPU: "CPU(%)",
	ServerGridDisk: "Disco(%)",
	ServerGridTotalMemory: "Memoria",
	ServerGridTotalCPU: "CPU",
	ServerGridTotalDisk: "Disco",
	ServerGridLastUpdate: "Ultimo aggiornamento",
	ServerGridHypervisor: "Hypervisor",
	WCAServerGridPart: "Parte",
	ProjectRequestedServers: "Server richiesto(i)",
	ProjectActiveServers: "Server attivi",
	
	ViewProjectGeneralLegend: "Generale",
	ViewProjectName: "Nome",
	ViewProjectDescription: "Descrizione",
	ViewProjectServiceOwner: "Proprietario del servizio",
	ViewProjectType: "Tipo di progetto",
	ViewProjectStartDate: "Data di inizio",
	ViewProjectEndDate: "Data di fine",
	ViewProjectTeamAccess: "Accesso al team",
	ViewProjectRequestedServer: "Server richiesti",
	ViewProjectActiveServers: "Server attivi",
	
	ViewProjectServersLegend: "Server",
	ViewProjectServersTitle: "Server",
	ViewProjectMasterImage: "Immagine master",
	ViewProjectCreateDate: "Data creazione",
	ViewProjectCreatedBy: "Creato da",
	ViewProjectHypervisor: "Hypervisor",
	ViewProjectServerStatus: "Stato di provisioning",
	ViewProjectServerStatusLastUpdate: "Aggiornamento ultimo stato di provisioning",
	ViewProjectCPU: "CPU",
	ViewProjectVirtual: "Virtuale",
	ViewProjectPhysical: "Fisico",
	ViewProjectMain: "Principale",
	ViewProjectSwap: "Effettua lo scambio",
	ViewProjectDisk: "Disco",
	ViewProjectLocal: "Locale",
	ViewProjectAdditionalSoftware: "Software aggiuntivo",
	ViewProjectMemory: "Memoria",
	ViewProjectServersTotal: "Totale: ",
	ProjectUsed: "Il nome progetto è già in uso.",

	CTJZH2304I: "CTJZH2304I: È necessario selezionare un server virtuale",
	CTJZH2310E: "CTJZH2310E: Impossibile visualizzare i dettagli del progetto. Impossibile trovare un ID progetto.",
	CTJZH2311E: "CTJZH2311E: Impossibile visualizzare i dettagli del progetto a causa di un errore interno.",
	CTJZH2312E: "CTJZH2312E: Si è verificato un errore durante il richiamo dei dettagli del progetto.",
	CTJZH2314E: "CTJZH2314E: Si è verificato un errore durante il richiamo dei dettagli di questo progetto.",
	CTJZH2315E: "CTJZH2315E: Impossibile richiamare l'elenco di progetti.",
	CTJZH2332E: "CTJZH2332E: Il valore di memoria consigliato non può essere inferiore al valore minimo.",
    CTJZH2333E: "CTJZH2333E: Le CPU fisiche consigliate non possono essere inferiori alla CPU fisica minima.",
	CTJZH2340W: "CTJZH2340W: Richiamo dell'elenco di date di inizio disponibili per la prenotazione non riuscito.",
	CTJZH2341W: "CTJZH2341W: Il server selezionato dispone già di un'immagine. La nuova immagine sostituirà quella esistente.",
	CTJZH2343E: "CTJZH2343E: Una delle risorse consigliate è inferiore alla corrispondente risorsa minima.",
	CTJZH2347E: "CTJZH2347E: Nessun server con tali parametri disponibile nelle date indicate.",
	CTJZH2348E: "CTJZH2348E: Il progetto {0} sta per essere annullato.",
	CTJZH2349E: "CTJZH2349E: La registrazione dell'immagine {0} sta per essere annullata.",
	CTJZH2350E: "CTJZH2350E: L'utente {0} sta per essere rimosso.",
	CTJZH2351E: "CTJZH2351E: Il team {0} sta per essere rimosso.",
	CTJZH2352E: "CTJZH2352E: Il server {0} sta per essere rimosso.",
	
	//SRM 721
	HelpFixDesc : "Ricercare una soluzione al proprio problema. Aprire un ticket per risolvere il problema se non viene trovata una soluzione.",
    CTJZH2359I: "CTJZH2359I: Il carrello degli acquisti è vuoto",
	CurrentCart:  "Carrello corrente",
	More:  "altro",
    Cart:  "Carrello",
	CreateSR:  "Crea richiesta",
	CTJZH2360I: "CTJZH2360I: Non è definito alcun modello.",
	CTJZH2363I: "CTJZH2363I: Non sono presenti soluzioni attive o soluzioni abilitate per il centro Self Service.",

	//Help me fix an issue
	SubmitLabel : "Inoltra",
	SearchTextLabel : "Parole chiave di ricerca",
	
	//Frequent Requests
	SystemWideFrequentRequest : "Richiesta frequente a livello di sistema",
	MyFrequentRequests : "Richieste frequenti personali",
	CTJZH2353E: "CTJZH2353E: Non sono presenti richieste frequenti da visualizzare ",
	
	CreateSRLabel: "Segnala un problema",
	
	SearchFieldText : "Ricerca Soluzioni, Offerta e Inserimenti rapidi",
	SearchFieldTextNoSol : "Ricerca Offerta e Inserimenti rapidi",
	FolderView : "Vista cartella",
	TreeView : "Vista ad albero",
	Maximize : "Ingrandisci",
	Minimize : "Ripristina",
	Folders :  "Servizi",
	SolutionFolders :  "Soluzioni",
	
	dummy_: ""
  })
);



