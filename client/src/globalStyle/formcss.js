const { PRIMARY_COLOR } = require("../constants");

module.exports = {
  formHead: {
    fontSize: 30,
    color: PRIMARY_COLOR,
    textAlign: "center",
    fontWeight: "bold",
    // backgroundColor: 'white',
  },
  formInput: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
  },
  passwordInputContainer: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 0,
    paddingVertical: 10,
    fontSize: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  formbtn: {
    width: "80%",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  formTextLinkRight: {
    color: PRIMARY_COLOR,
    fontSize: 15,
    textAlign: "right",
    width: "80%",
    marginVertical: 10,
  },
  formTextLinkCenter: {
    color: "gray",
    fontSize: 16,
  },
  formHead2: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  formHead3: {
    fontSize: 20,
    color: "grey",
    textAlign: "center",
    fontWeight: "400",
    padding: 10,
    borderRadius: 10,
    width: "80%",
    marginVertical: 10,
  },
  formTextLink: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
  },
};
