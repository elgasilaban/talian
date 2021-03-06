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
	Title: "Станция самообслуживания Tivoli",
	About: "О программе",
	Help: "Справка",
	Logout: "Выход из системы",
	Welcome: "Приветствие",
	// Login widget
	LoginHeading: "Вход в Maximo",
	Username: "Имя пользователя",
	Password: "Пароль",
	Login: "Регистрация",
	InvalidLogin: "Неверное имя пользователя или пароль. Попробуйте еще раз.",
	NotAuthorized: "У вас нет прав использовать эту прикладную программу",
	// MyCatalogRequestsGrid widget
	ShowSelectedDetails: "Показать подробности для выбранной строки",
	ApproveSelectedRequest: "Утвердить выбранную заявку",
	RejectSelectedRequest: "Отклонить выбранную заявку",
	ShowDetails: "Показать сведения",
	
	SRRequestPodHeading: "Мои требования",	
	SRShowMyRequestsLink: "Показать все мои заявки",
	SRMyRequests: "Мои требования",
	
	INCIDENTRequestPodHeading: "Мои инциденты",
	INCIDENTShowMyRequestsLink: "Показать все мои инциденты...",
	INCIDENTMyRequests: "Мои инциденты",
	
	AssetsPodHeading: "Мои активы",	
	ShowMyAssetsLink: "Показать все мои активы",
	MyAssets: "Мои активы",
	
	ShowAllRequests: "Показать все заявки",
	ShowLastRequests: "Показать последние ${0} заявок",
	ShowAllNews: "Показать все новые",
	ShowLastNews: "Показать последние ${0} новых",
	MyApprovalHeading: "Мои утверждения",	
	Refresh: "Обновить",
	// my catalog request grid column headings
	TotalCost: "Итоговая стоимость",
	StatusDate: "Время состояния",
	RequestedBy: "Кем затребовано",
	Status: "Состояние",
	Quantity: "Количество",
	UnitCost: "Стоимость за единицу",
	Description: "Описание",
	ItemNum: "Тип требования",
	RequestedFor: "Для кого затребовано",
	ItemSetID: "ID номенклатуры ТМЦ",
	DateEntered: "Введённая дата",
	MRNum: "MRNUM",
	Priority: "Приоритет",
	SiteID: "ID площадки",
	MRLINEID: "MRLINE ID",
	// MyDeploymentsGrid
	Name: "Имя",
	ServiceOwner: "Владелец службы",
	//ChnageDate: "Change Date",
	DueDate: "Срок исполнения",
	CreatedDate: "Создано",
	StartDate: "Плановое начало",
	OfferingDescription: "Описание заявки",
	Approval: "Утверждение",
	// Catalog Request Creator
	CatalogRequestCreateHeading: "Создать новую заявку",
	CatalogOfferingPrompt: "Предложение каталога услуг",
	CreateRequestStatus: "Заявка успешно передана",
	CreateRequestButtonLabel: "ОК",
	CancelButtonLabel: "Отмена",
	Location: "Позиция",
	AssetNumber: "Номер актива",
	Serial: "Номер серии", 
	IsPrimary: "Первичный пользователь",
	IsUser: "Пользователь",
	IsCustodian: "Ответственный",		
	RefreshDate: "Дата обновления",
	PlannedRefreshDate: "Запланированная дата обновления",
	ChangeDate: "Дата изменения",
	AssetActivity: "Текущие активы",
	
	// Navigator widget
	Home: "Домашняя страница",
	Back: "Назад", 
	Forward: "Переадресовать",
	HomeBreadcrumb: "Домашняя страница",
	Search: "Поиск",
	SearchAdjust: "Уточните поиск",
	SearchResults: "Результаты поиска",
	Close: "Закрыть",
	IncidentsLabel: "Паспорта справки и поддержка",
	IncidentsDesc: "Откройте паспорт справки для существующего актива или услуги.",
	RequestsLabel: "Подайте заявку на новую услугу",
	RequestsDesc: "Подайте заявку на новый актив или услугу",
    IssuesLabel: "Сообщить о проблеме",
    IssuesDesc: "Создайте новую заявку на услуги, чтобы сообщить о вопросе",
    BrowseSolutionsLabel: "Просмотр решений",
    BrowseSolutionsDesc: "Просмотреть все существующие решения.",
    
	RecentsLabel: "Частые заявки",
	RecentsDesc: "Удобный доступ к услугам, на которые вы часто подавали заявки.",
	HelpFixLabel: "Поиск решений",
   SearchToolTip: "Для поиска на основе одного или другого слова используйте пробел или оператор OR. Пример: защита от вирусов, защита OR вирус. Для поиска на основе нескольких существующих слов используйте оператор AND. Пример: lotus AND notes. Для поиска точного совпадения заключите слова в кавычки. Пример: \"lotus notes\".",
	createSRToolTip: "Создайте новую заявку на услуги, чтобы сообщить о вопросе или затребовать что-либо.",
	templateToolTip: "Шаблоны корзин",
	
	None: "Нет",
	NA: "НЕПРИМЕНИМО",
	//branch in navigator tree
	Directory: "Каталог",
	//leaf in navigator tree
	Panel: "Панель",
	// DateRange Widget
	DurationLabel: "На следующий срок",
	MonthsLabel: "Месяцы",
	WeeksLabel: "Недели",
	DaysLabel: "Дни",
	ForeverLabel: "Неограниченно",
	StartDateLabel: "Дата начала",
	EndDateLabel: "Дата окончания",
	StartTime: "Время начала",
	EndTime: "Время окончания",
	UntilLabel: "До этой даты",
	InvalidDurationMessage: "Срок должен быть больше 0",
	InvalidDateMessage: "Это недопустимая дата",
	DateEarlyMessage: "Эта дата - ранее ${0}, самой ранней допустимой даты",
	DateLateMessage: "Эта дата - позднее ${0}, самой поздней допустимой даты",
	MissingDateMessage: "Эта дата является обязательной",

	Loading: "Загрузка...",
	RecentActivity: "Последняя операция",
	NoRecentActivity: "Нет последней операции",
    NoAssetsAssigned: "Активы не назначены",
	ManageRequests: "Управление заявками",
	ManageRequestsLink: "Управление заявками...",
	ManageApprovalsLink: "Управление утверждениями...",
	ManageMyNewsLink: "Просмотр моих новостей...",
	ManageMyNews: "Просмотр моих новостей",
	ManageApprovals: "Управление утверждениями",
    CartID: "ID корзины",
	

	//General
	OK : "ОК",
	Cancel : "Отмена",
	Select: "Выбрать",
	Total: "Итого",
	TotalLabel: "Итого: ",
	ConfirmationProceed: "Вы уверены, что хотите продолжить?",
	ConfirmationDialogTitle: "Требуется подтверждение",
	
	// error messages
	CTJZH2301E: "CTJZH2301E: Ошибка при создании формы ввода для этой заявки.",
	CTJZH2302E: "CTJZH2302E: Ошибка при получении подробностей этой заявки.",
	CTJZH2303E: "CTJZH2303E: Чтобы создавать заявки, необходимо зарегистрироваться.",
		
	CTJZH2305E: "CTJZH2305E: У вас есть поля ввода с недопустимыми значениями. Прежде чем продолжить, необходимо исправить эти ошибки.",
	CTJZH2306E: "CTJZH2306E: Система сообщила об ошибке при создании этой заявки.",
	CTJZH2307E: "CTJZH2307E: Ошибка во время вашей попытки зарегистрироваться в системе.",
	CTJZH2308E: "CTJZH2308E: К сожалению, создание этой заявки в настоящее время не поддерживается.",
	CTJZH2309E: "CTJZH2309E: Не удалось продолжить из-за внутренней ошибки.",
		
	CTJZH2313E: "CTJZH2313E: Не удалось получить список заявок на услуги.",
	CTJZH2360E: "CTJZH2360E: Не удалось получить список активов.",
		
	CTJZH2316E: "CTJZH2316E: Сообщение, которое нужно вывести на экран, содержит нулевой код, неопределенный код или пустой код, либо имеет недопустимый тип.",
	CTJZH2317E: "CTJZH2317E: Подтверждение не совпадает с паролем.", 
	CTJZH2318E: "CTJZH2318E: Можно выбрать не более 5 групп.",
	CTJZH2319E: "CTJZH2319E: Имя пользователя уже существует.",
	CTJZH2320E: "CTJZH2320E: Уже выбрано максимальное число пользователей - 15.",
	CTJZH2321I: "CTJZH2321I: Для этой заявки нет подробностей, которые можно вывести на экран.",
	CTJZH2322E: "CTJZH2322E: Пароль не может начинаться или оканчиваться пробелом.", 
	CTJZH2324E: "CTJZH2324E: Имя пользователя содержит пробелы.",	
	CTJZH2323E: "CTJZH2323E: Не удалось передать эту заявку на услугу, поскольку нет зарегистрированных пулов ресурсов этого типа.", 
	CTJZH2325E: "CTJZH2325E: Заявка больше не доступна.",
	CTJZH2328W: "CTJZH2328W: Удаление пользователя не подлежит отмене, и этот id пользователя нельзя будет использовать второй раз", 
	CTJZH2329E: "CTJZH2329E: Указанный id принадлежит удаленному пользователю и не может быть использован второй раз", 
	CTJZH2331E: "CTJZH2331E: Ошибка при обработке выбранной заявки.",
		
    CTJZH2334E: "CTJZH2334E: Ошибка сервера при изменении этой заявки на услуги с указанными данными",
	CTJZH2335E: "CTJZH2335E: Неустранимая ошибка сервера при создании новой заявки на услуги",
	CTJZH2336E: "CTJZH2336E: Введенные подробности утверждения превышают максимальную длину 50 символов.",	
	CTJZH2337E: "CTJZH2337E: Не удалось создать новую заявку на услуги, поскольку вы, по-видимому, не зарегистрировались",
	CTJZH2338E: "CTJZH2338E: Ошибка сервера при создании новой заявки на услуги",
	CTJZH2339I: "CTJZH2339I: К сожалению, соответствия не найдены.",
	
	CTJZH2342E: "CTJZH2342E: Ошибка при создании этой заявки.",
		
	CTJZH2345E: "CTJZH2345E: Невозможно удалить эту группу, поскольку у нее есть активные проекты.",
	CTJZH2346E: "CTJZH2346E: Пароль должен содержать не менее 6 символов",
	
	CTJZH2353I: "CTJZH2353I: Вы пытаетесь произвести более максимального числа изменений в группе (для этой заявки - 5). Чтобы произвести более 5 изменений в группе, создайте дополнительные заявки на изменение групп.",
	CTJZH2354I: "CTJZH2354I: Вы пытаетесь произвести более максимально числа изменений в пользователе (для этой заявки - 15). Чтобы произвести более 15 изменений в пользователе, создайте дополнительные заявки на изменение пользователей.",	
	
	CTJZH2355I: "CTJZH2355I: Данные индекса поиска недоступны или повреждены. Запустите снова задачу хрона PmObjSearchCron.",
	CTJZH2356I: "CTJZH2356I: Нужно ввести строку поиска",
	CTJZH2357I: "CTJZH2357I: Данные индекса поиска обновляются. Повторите попытку позднее.",
	CTJZH2358I: "CTJZH2358I:NODICTION",
	CTJZH2361I: "CTJZH2361I: Нет предложений или шаблонов, доступных или активных для этого пользователя. Убедитесь, что пользователь авторизован для доступа к предложениям каталога или к шаблонам паспортов.",
	CTJZH2362I: "CTJZH2362I: Чтобы включить все возможности Центра самообслуживания в Internet Explorer, установите подключаемый модуль Silverlight www.microsoft.com/getsilverlight/",

    	
	//String list for user and team
	//Role: "Role",
	//Language: "Language",
	Team: "Группа",
	UserTeams: "Группы пользователей",
	
	//UserStatus: "Activate user account",
	LOGINID: "ID регистрации",
	AccountLegend: "Параметры учетной записи",
	PersonalInfoLegend: "Личная информация",
	RegionalSettLegend: "Региональные стандарты",
	FirstName: "Имя",
	LastName: "Фамилия",
	DisplayName: "Выводимое имя",
	Email: "Электронная почта",
	Telephone: "Телефон",
	Address: "Адрес",
	City: "Город",
	State: "Состояние",
	Country: "Страна",
	AccountStatus: "Активный",
	EmptyString: "               ",
	UserList: "Доступные пользователи",
	UserID: "ID пользователя",
	Role: "Роль",
	ConfirmPassword: "Подтверждение пароля",
	InvalidConfirmPassword: "Подтверждение не совпадает с паролем",
	PressToAddTeam: "Нажмите кнопку +, чтобы добавить группу",
	CreateUserInstruction: "Пользователя можно добавить не более, чем в 5 групп в одной заявке. Чтобы добавить пользователя в большее число групп, создайте дополнительные заявки на изменение пользователя.",
	ModifyUserInstruction: "Пользователя можно добавить или удалить не более, чем для 5 групп в одной заявке. Чтобы произвести большее число изменений, создайте дополнительные заявки на изменение пользователя.",
	// Team Management
	TeamID: "Идентификатор",
	TeamName: "Name",
	TeamDescription: "Описание",
	UserList: "Доступные пользователи",
	SelectedUserList: "Выбранные пользователи",
	TeamDetails: "Подробности группы",
	ProjectAccount: "Учетная запись проекта",
	QuickFilter: "быстрый фильтр",
	TeamNameExists: "Группа с этим именем уже существует.",
	CreateTeamInstruction: "Группа может содержать до 15 пользователей на одну заявку. Чтобы добавить в группу большее число пользователей, создайте дополнительные заявки на изменение группы.",
	ModifyTeamInstruction: "Вы можете добавить или удалить из группы до 15 пользователей на одну заявку. Чтобы произвести большее число изменений, создайте дополнительные заявки на изменение группы.",

	Yes: "Да",
	No: "Нет",
	UserExist: "Пользователь уже существует",
	MaxTeamsExceed: "Превышена максимальная длина для группы",
	PreviewCloseTitle: "Закрыть раздел",
	PreviewOpenTitle: "Открыть раздел",

	/* Service Request details */
	Application: "Программа",
	CreatedOn: "Дата создания",
	Date: "Дата",
	Details: "Сведения",
	From: "От",
	Subject: "Тема",
	Summary: "Сводка",
	FailedStatus: "Отказ",
	To: "Кому",
	ViewSRDetails: "Подробности заявки",
	ViewSRTitle: "Просмотр заявок на услуги",
	ViewSRGeneral: "Общее",
	ViewSRGenBannerApproval: "Эта задача позволяет утвердить или отклонить заявку на услуги",
	ViewSRGenBannerNoApproval: "Эта задача выводит на экран подробности заявки на услугу",
	ViewSRLastUpdate: "Последнее изменение",
	ViewSRUpdatedBy: "Кем изменено",
	ViewSRWorkLog: "Журнал работ",
	ViewSRWorkBanner: "Журнал работ для заявки на услугу. Выберите строку таблицы, чтобы посмотреть сведения о примечании.",
	ViewSRNoWorkl: "Нет журналов работ для вывода",
	ViewSRCommLog: "Журнал связи",
	ViewSRCommBanner: "Журнал корреспонденции для заявки на услугу. Выберите строку таблицы, чтобы посмотреть сведения о примечании.",
	ViewSRNoComml: "Нет журналов связи для вывода",
    //Venky : new
	ViewSolutionForSRPR: "Решения для заявок на услугу и ЗНЗ",
	ViewSRNoSol: "Нет решений для вывода",
	Symptom: "Признак",
	Cause: "Причина",
	Resolution: "Разрешение",
	ViewSRSolDetails: "Подробности решения заявки на услугу",
	ViewRRSolDetails: "Подробности решения ЗНЗ",
	ViewSolutionForSRPRBanner: "Решение для заявки на услугу и связанные записи.",
	InvalidColumn1: "Столбцы :",
	InvalidColumn2: "сконфигурировано для диалога 'Показать все мои заявки' в 'Узел Мои заявки не существует'. Измените программу Центр самообслуживания и исправьте свойства столбцов.",
	/* Bulletin Board */
    MyNewsHeading: "Мои новости",
	Message: "Сообщение",
	PostDate: "Дата размещения",
	PostBy: "Кто поместил",
	ExpireDate: "Дата окончания срока действия",
	ViewBBMessageDetails: "Подробности по сообщению",
	ViewBBMessageTitle: "Подробности моих новостей",
	ViewBBMessageBanner: "Эта задача выводит на экран подробности для сообщения",
	MsgViewed: "Просмотрено?",
	
	/* LiveChat */
    LiveChatHeading: "Связаться с нами",
    LiveChatLink: "Начать чат сейчас",
    LiveChatMessage: "<UL STYLE='margin-top:0px;margin-bottom:2px;list-style-type: none;'> <LI> Чат с агентом</LI> <LI> Доступен ежедневно с 8.30 до 18 часов EST</LI> <LI> <A HREF='http://pic.dhe.ibm.com/infocenter/tivihelp/v58r1/index.jsp' target='blank'>Информация SmartCloud Control Desk</A></LI> </UL>",
     
	
	/* ITM Agent Statuses */
	noAgentState: "Нет мониторов",
	onlineState: "Отслеживать оперативные",
	offlineState: "Отслеживать автономные",
	toobusyState: "Отслеживать занятые и не отвечающие",
	notconfiguredState: "Монитор не сконфигурирован",
	
	/* Approve Request */
	AppRequestBannerTitle: "Утверждение",
	AppRequestBannerDescription: "Для утверждения необходимо ваше решение. Вы утверждаете или отклоняете?",
	RejectRequest: "Я отклоняю эту заявку",
	ApproveRequest: "Я утверждаю эту заявку",
	ApproveSummary: "Сводка",
	ApproveDetails: "Сведения",
	
	ContextButtonSetLabelCreate: "Создать",
	
	copyright: "Лицензированные материалы - собственность корпорации &copy; IBM Corporation и другие 2009. IBM - зарегистрированный товарный знак корпорации IBM в США и/или других странах.",
	AboutCopyright: "Лицензированные материалы - Собственность IBM Corp. &copy; Copyright IBM Corp. 2009. Все права защищены. US Government Users Restricted Rights - Use, duplication, or	disclosure restricted by GSA ADP Schedule Contract with IBM Corp.",	
	

	// TSAM specific messages ------------------------------------------------------------
	MyDeploymentsHeading: "Проекты",

	//Project Details
	ProjectTitle: "Проект",
	ProjectDetails: "Сведения о проекте",
	ProjectDetailsImage: "",
	ProjectName: "Имя проекта",
	ProjectDescription: "Описание проекта",
	ProjectType: "Тип проекта",
	ProjectStartDate: "Дата начала",
	ProjectEndDate: "Дата окончания",
	ProjectTeamAccess: "Доступ группы",
	ProjectsDropDownEmptyLabel: "Выберите проект",	
	
	//WCA Projects
	WCAProjectTitle: "Проект WebSphere CloudBurst",
	WCAProjectDetails: "Подробности проекта WebSphere CloudBurst",
	WCAProjectPattern: "Имя шаблона",
	WCAServerResourcesLegend: "Ресурсы",
	WCAServerVirtualCPU: "Виртуальный процессор",
	WCAServerMemory: "Основная память",
	WCAPatternSelection: "Выбрать шаблон CloudBurst",
	
	ServerGridName: "Имя сервера",
	ServerGridOS: "Операционная система",
	ServerGridStatus: "Состояние",
	ServerGridMemory: "Память (%)",
	ServerGridCPU: "Процессор (%)",
	ServerGridDisk: "Диск (%)",
	ServerGridTotalMemory: "Память",
	ServerGridTotalCPU: "Процессор",
	ServerGridTotalDisk: "Диск",
	ServerGridLastUpdate: "Последнее обновление",
	ServerGridHypervisor: "Гипервизор",
	WCAServerGridPart: "Часть",
	ProjectRequestedServers: "Затребованные серверы",
	ProjectActiveServers: "Активные серверы",
	
	ViewProjectGeneralLegend: "Общее",
	ViewProjectName: "Name",
	ViewProjectDescription: "Описание",
	ViewProjectServiceOwner: "Владелец службы",
	ViewProjectType: "Тип проекта",
	ViewProjectStartDate: "Дата начала",
	ViewProjectEndDate: "Дата окончания",
	ViewProjectTeamAccess: "Доступ группы",
	ViewProjectRequestedServer: "Затребованные серверы",
	ViewProjectActiveServers: "Активные серверы",
	
	ViewProjectServersLegend: "Серверы",
	ViewProjectServersTitle: "Сервер",
	ViewProjectMasterImage: "Главный образ",
	ViewProjectCreateDate: "Дата создания",
	ViewProjectCreatedBy: "Кем создан",
	ViewProjectHypervisor: "Гипервизор",
	ViewProjectServerStatus: "Состояние предоставления доступа",
	ViewProjectServerStatusLastUpdate: "Последнее изменение состояния предоставления доступа",
	ViewProjectCPU: "Процессор",
	ViewProjectVirtual: "Виртуальный",
	ViewProjectPhysical: "Физический",
	ViewProjectMain: "Основной",
	ViewProjectSwap: "Обменять",
	ViewProjectDisk: "Диск",
	ViewProjectLocal: "Локальный",
	ViewProjectAdditionalSoftware: "Дополнительное программное обеспечение",
	ViewProjectMemory: "Память",
	ViewProjectServersTotal: "Итого: ",
	ProjectUsed: "Имя проекта уже используется.",

	CTJZH2304I: "CTJZH2304I: Надо выбрать виртуальный сервер",
	CTJZH2310E: "CTJZH2310E: Не удалось вывести на экран подробности проекта. Не найден ID проекта.",
	CTJZH2311E: "CTJZH2311E: Не удалось вывести на экран подробности проекта из-за внутренней ошибки.",
	CTJZH2312E: "CTJZH2312E: Ошибка при получении подробностей этого проекта.",
	CTJZH2314E: "CTJZH2314E: Ошибка при получении подробностей этого проекта.",
	CTJZH2315E: "CTJZH2315E: Не удалось получить список проектов.",
	CTJZH2332E: "CTJZH2332E: Рекомендуемое значение памяти не может быть меньше минимального значения.",
    CTJZH2333E: "CTJZH2333E: Рекомендуемое число физических процессоров не может быть меньше минимального.",
	CTJZH2340W: "CTJZH2340W: Не удалось получить список допустимых начальных дат для резервирования.",
	CTJZH2341W: "CTJZH2341W: У выбранного сервера уже есть образ. Новый образ заменит существующий.",
	CTJZH2343E: "CTJZH2343E: Один из рекомендуемых ресурсов меньше соответствующего минимума.",
	CTJZH2347E: "CTJZH2347E: Для этих дат нет доступных серверов с этими параметрами.",
	CTJZH2348E: "CTJZH2348E: Вы собираетесь отменить проект {0}.",
	CTJZH2349E: "CTJZH2349E: Вы собираетесь отменить регистрацию образа {0}.",
	CTJZH2350E: "CTJZH2350E: Вы собираетесь удалить пользователя {0}.",
	CTJZH2351E: "CTJZH2351E: Вы собираетесь удалить группу {0}.",
	CTJZH2352E: "CTJZH2352E: Вы собираетесь удалить сервер {0}.",
	
	//SRM 721
	HelpFixDesc : "Выполните поиск решения для вашего вопроса. Если решение не будет найдено, откройте паспорт для решения вопроса.",
    CTJZH2359I: "CTJZH2359I: Корзина покупок пуста",
	CurrentCart:  "Текущая корзина",
	More:  "далее",
    Cart:  "Корзина",
	CreateSR:  "Создать требование",
	CTJZH2360I: "CTJZH2360I: У вас не определены никакие шаблоны.",
	CTJZH2363I: "CTJZH2363I: Нет активных решений или решений, разрешенных для Центра самообслуживания.",

	//Help me fix an issue
	SubmitLabel : "Отправить",
	SearchTextLabel : "Ключевые слова поиска",
	
	//Frequent Requests
	SystemWideFrequentRequest : "Частые заявки масштаба системы",
	MyFrequentRequests : "Мои частые заявки",
	CTJZH2353E: "CTJZH2353E: Нет частых заявок для вывода ",
	
	CreateSRLabel: "Сообщить о проблеме",
	
	SearchFieldText : "Поиск решений, предложений и быстрых вставок",
	SearchFieldTextNoSol : "Поиск предложений и быстрых вставок",
	FolderView : "Представление папки",
	TreeView : "Представление в виде дерева",
	Maximize : "Развернуть",
	Minimize : "Восстановить",
	Folders :  "Услуги",
	SolutionFolders :  "Решения",
	
	dummy_: ""
  })
);



