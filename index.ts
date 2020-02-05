import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class PCFToDoList implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private _tdlcontainer: HTMLDivElement;
	private _heading: HTMLHeadElement;
	private _itemsDiv: HTMLDivElement;
	private _checkboxItem1 : HTMLInputElement;
	private _labelItem1 : HTMLLabelElement;
	private _checkboxItem2 : HTMLInputElement;
	private _labelItem2 : HTMLLabelElement;
	private _checkboxItem3 : HTMLInputElement;
	private _labelItem3 : HTMLLabelElement;
	private _checkboxItem4 : HTMLInputElement;
	private _labelItem4 : HTMLLabelElement;
	private _checkboxItem5 : HTMLInputElement;
	private _labelItem5 : HTMLLabelElement;

	private _done: HTMLHeadElement;
	private _pending: HTMLHeadElement;

	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this._tdlcontainer = document.createElement("div");
		this._tdlcontainer.className = "todoList";

		this._heading = document.createElement("h1");
		this._heading.textContent = "To-Do list for this Customer";

		this._itemsDiv = document.createElement("div");
		this._itemsDiv.className = "items";
		this._itemsDiv.setAttribute("style","text-align:left;");


		this._checkboxItem1 = document.createElement("input");
		this._checkboxItem1.id = "item1";
		this._checkboxItem1.type = "checkbox";

		this._labelItem1 = document.createElement("label");
		this._labelItem1.textContent = "Brief customer about the insurance plan";
		this._labelItem1.setAttribute("for","item1");
		this._labelItem1.setAttribute("style","text-align:left;");

		this._checkboxItem2 = document.createElement("input");
		this._checkboxItem2.id = "item2";
		this._checkboxItem2.type = "checkbox";
		
		this._labelItem2 = document.createElement("label");
		this._labelItem2.textContent = "Verify documents";
		this._labelItem2.setAttribute("for","item2");
		this._labelItem2.setAttribute("style","text-align:left;");

		this._checkboxItem3 = document.createElement("input");
		this._checkboxItem3.id = "item3";
		this._checkboxItem3.type = "checkbox";
		
		this._labelItem3 = document.createElement("label");
		this._labelItem3.textContent = "Sign the declaration form";
		this._labelItem3.setAttribute("for","item3");
		this._labelItem3.setAttribute("style","text-align:left;");

		this._checkboxItem4 = document.createElement("input");
		this._checkboxItem4.id = "item4";
		this._checkboxItem4.type = "checkbox";
		
		this._labelItem4 = document.createElement("label");
		this._labelItem4.textContent = "Policy Handover";
		this._labelItem4.setAttribute("for","item4");
		this._labelItem4.setAttribute("style","text-align:left;");

		this._checkboxItem5 = document.createElement("input");
		this._checkboxItem5.id = "item5";
		this._checkboxItem5.type = "checkbox";
		
		this._labelItem5 = document.createElement("label");
		this._labelItem5.textContent = "Set follow up meeting time";
		this._labelItem5.setAttribute("for","item5");
		this._labelItem5.setAttribute("style","text-align:left;");
		

		this._done = document.createElement("h2");
		this._done.className = "done";
		this._done.textContent = "Done";

		this._pending = document.createElement("h2");
		this._pending.className = "pending";
		this._pending.textContent = "Pending";

		this._itemsDiv.appendChild(this._checkboxItem1);
		this._itemsDiv.appendChild(this._labelItem1);
		this._itemsDiv.appendChild(this._checkboxItem2);
		this._itemsDiv.appendChild(this._labelItem2);
		this._itemsDiv.appendChild(this._checkboxItem3);
		this._itemsDiv.appendChild(this._labelItem3);
		this._itemsDiv.appendChild(this._checkboxItem4);
		this._itemsDiv.appendChild(this._labelItem4);
		this._itemsDiv.appendChild(this._checkboxItem5);
		this._itemsDiv.appendChild(this._labelItem5);
		this._itemsDiv.appendChild(this._done);
		this._itemsDiv.appendChild(this._pending);

		this._tdlcontainer.appendChild(this._heading);
		this._tdlcontainer.appendChild(this._itemsDiv);

		this._container.appendChild(this._tdlcontainer);

	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}