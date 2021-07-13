const INITIAL_STATE = {
	backgroundColor: {
		name: "black",
		backgroundColor: "#171717",
		secondaryColor: "white",
	},
	primaryColor: {
		name: "primary",
		colorCode: "#04a777"
	}
};

const reducer = (state = INITIAL_STATE, action) => {
		switch (action.type) {
			case "MODAL_PRIMARY":
				return {
					...state, primaryColor: action.payload
		   		};
			case "MODAL_BACKGROUND":
				switch(action.payload){
					case "black":
						return {
							...state, backgroundColor: {
								name: "black",
								backgroundColor: "#171717",
								secondaryColor: "#ffffff"
							}
						};
					case "dark":
						return {
							...state, backgroundColor: {
								name: "dark",
								backgroundColor: "#37474f",
								secondaryColor: "#ffffff"
							}
						};
					case "white":
						return {
							...state, backgroundColor: {
								name: "white",
								backgroundColor: "#fff",
								secondaryColor: "#171717"
							}
						};
					case "light":
						return {
							...state, backgroundColor: {
								name: "light",
								backgroundColor: "#dee4e7",
								secondaryColor: "#171717"
							}
						};
						
				}
			default: return state;
	}
};

export default reducer;