
package com.backend.Agriculture.controller;

import com.backend.Agriculture.entities.Customer;
import com.backend.Agriculture.models.LoginDTO;
import com.backend.Agriculture.models.Response;
import com.backend.Agriculture.services.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CustomerController.class)
public class CustomerControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Mock
	private CustomerService customerService;

	@InjectMocks
	private CustomerController customerController;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(customerController).build();
	}

	@Test
	public void validateCustomer_ValidRequest_ReturnsOk() throws Exception {
		// Arrange
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setEmail("test@example.com");
		loginDTO.setPassword("password");

		when(customerService.validate("test@example.com", "password")).thenReturn(new Customer());

		// Act and Assert
		mockMvc.perform(MockMvcRequestBuilders.post("/api/customers/validate").contentType(MediaType.APPLICATION_JSON)
				.content("{\"email\":\"test@example.com\",\"password\":\"password\"}")).andExpect(status().isOk())
				.andExpect(jsonPath("$.status").value("success"));
	}

	@Test
	public void validateCustomer_InvalidEmail_ReturnsBadRequest() throws Exception {
		// Arrange
		LoginDTO loginDTO = new LoginDTO();
		loginDTO.setEmail("");
		loginDTO.setPassword("password");

		// Act and Assert
		mockMvc.perform(MockMvcRequestBuilders.post("/api/customers/validate").contentType(MediaType.APPLICATION_JSON)
				.content("{\"email\":\"\",\"password\":\"password\"}")).andExpect(status().isBadRequest());
	}

	@Test
	public void validateCustomer_NullEmail_ReturnsBadRequest() throws Exception {
		// Act and Assert
		mockMvc.perform(MockMvcRequestBuilders.post("/api/customers/validate").contentType(MediaType.APPLICATION_JSON)
				.content("{\"email\":null,\"password\":\"password\"}")).andExpect(status().isBadRequest());
	}

	@Test
	public void validateCustomer_NullPassword_ReturnsBadRequest() throws Exception {
		// Act and Assert
		mockMvc.perform(MockMvcRequestBuilders.post("/api/customers/validate").contentType(MediaType.APPLICATION_JSON)
				.content("{\"email\":\"test@example.com\",\"password\":null}")).andExpect(status().isBadRequest());
	}
}
