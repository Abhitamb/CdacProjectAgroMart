package com.backend.Agriculture.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.Agriculture.entities.Customer;
import com.backend.Agriculture.models.CustomerDto;
import com.backend.Agriculture.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerRepository customerRepo;
	
	PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
	
	@Override
	public Customer registerUser(CustomerDto customerDto) {
	    // Check if customer already exists
	    Customer existingCustomer = customerRepo.findByEmail(customerDto.getEmail());
	    if (existingCustomer != null) {
	        return null; // Customer already exists
	    }

	    // Create and save new customer with encoded password
	    Customer customer = new Customer();
	    String encodedPassword = passwordEncoder.encode(customerDto.getPassword());
	    customerDto.setPassword(encodedPassword);
	    BeanUtils.copyProperties(customerDto, customer);
	    return customerRepo.save(customer);
	}



//	@Override
//	public Customer validate(String email, String password) {
//	    if (email == null || password == null) {
//	        return null;
//	    }
//	    
//	    Customer customer = customerRepo.findByEmail(email);
//	    
//	    if (customer != null && passwordEncoder.matches(password, customer.getPassword())) {
//	        return customer;
//	    }
//	    
//	    return null;
//	}
	
	@Override
	public Customer validate(String email, String password) {
	    // Check if email and password are not null
	    if (email == null || email.trim().isEmpty() || password == null) {
	        return null;
	    }

	    // Retrieve the customer by email
	    Customer customer = customerRepo.findByEmail(email);

	    // Ensure customer is found and password matches
	    if (customer != null && passwordEncoder.matches(password, customer.getPassword())) {
	        return customer;
	    }

	    return null;
	}



	@Override
	public List<Customer> findAllCustomers() {
		return customerRepo.findAll();
	}

	@Override
	public Optional<Customer> findCustomerById(int id) {
		Optional<Customer> customer = customerRepo.findById(id);
		System.out.println(customer);
		if(customer!=null) {
		return customer;
		}else {
			return null;
		}
	}

	@Override
	public void updateProfile(Customer cust,int id) {
		System.out.println("Updating profile..."+id);
		// TODO Auto-generated method stub
		Optional<Customer> cust1=customerRepo.findById(id);
		if(cust1!=null) {
			if(cust.getPassword().equals("") || cust.getPassword()==null) {
				
				cust.setPassword(cust1.get().getPassword());
			}else if(cust.getPassword().equals(cust1.get().getPassword())) {
				cust.setPassword(cust1.get().getPassword());
			}else {
				String encodedPassword = passwordEncoder.encode(cust.getPassword());
				cust.setPassword(encodedPassword);
			}
			
			customerRepo.save(cust);
		}
	}

	@Override
	public Customer findByEmail(String email) {
		// TODO Auto-generated method stub
		Customer customer=customerRepo.findByEmail(email);
		return customer;
	}

	@Override
	public void resetPassword(Customer cust, String password) {
		String encodedPassword = passwordEncoder.encode(password);
		cust.setPassword(encodedPassword);
		customerRepo.save(cust);
	}
}
