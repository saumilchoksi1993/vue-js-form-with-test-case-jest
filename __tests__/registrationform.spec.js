import { mount } from '@vue/test-utils'
import RegistrationForm from '../src/components/RegistrationForm.vue'

describe('RegistrationForm', () => {
  it("form submit successfully", async () => {
    const wrapper = mount(RegistrationForm)

    await wrapper.find("#first_name").setValue("Saumil")
    await wrapper.find("#middle_name").setValue("Rajendrakumar")
    await wrapper.find("#last_name").setValue("Choksi")
    await wrapper.find("#date_of_birth").setValue("2022-09-24")
    await wrapper.find('Button').trigger('click')

    expect(wrapper.vm.first_name_error).toBe(false)
    expect(wrapper.vm.last_name_error).toBe(false)
    expect(wrapper.vm.date_of_birth_error).toBe(false)
    expect(wrapper.vm.isSubmitted).toBe(true)

    expect(wrapper.find(".message").text())
      .toBe("You have submitted successfully. Here is your form details.") 
  })
})

describe('RegistrationForm', () => {
  it("form required field validation check", async () => {
    const wrapper = mount(RegistrationForm)

    await wrapper.find('Button').trigger('click')

    // first name, last name and date of birth required field.
    expect(wrapper.find(".error_first_name").text())
      .toBe("First Name Required")
    expect(wrapper.vm.first_name_error).toBe(true)

    expect(wrapper.find(".error_last_name").text())
      .toBe("Last Name Required")
    expect(wrapper.vm.last_name_error).toBe(true)

    expect(wrapper.find(".error_date_of_birth").text())
      .toBe("Date of birth Required")
    expect(wrapper.vm.date_of_birth_error).toBe(true)

    expect(wrapper.vm.isSubmitted).toBe(false)
  })
})