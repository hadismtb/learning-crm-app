import ItemList from "@/components/module/ItemList";
import FormInput from "@/components/module/FormInput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        value={form.name}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        value={form.lastName}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        label="Email"
        value={form.email}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="Phone Number"
        value={form.phone}
        type="tel"
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        label="Address"
        value={form.address}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        label="Postal Code"
        value={form.postalCode}
        type="text"
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        label="Date"
        value={form.date}
        type="date"
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
