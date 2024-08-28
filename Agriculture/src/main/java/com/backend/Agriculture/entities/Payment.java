package com.backend.Agriculture.entities;


import java.util.Date;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="payments")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public long getCardNo() {
		return cardNo;
	}

	public void setCardNo(long cardNo) {
		this.cardNo = cardNo;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(Date paymentDate) {
		this.paymentDate = paymentDate;
	}

	//	@Length(max=16,min=16)
//	@NotBlank(message="Card Number must be supplied")
	private long cardNo;
	
	//@NotBlank(message="Name must be supplied")
	private String nameOnCard;
	
	//@NotBlank(message="Amount must be supplied")
	private double amount;
	
	//@NotBlank(message="Date must be supplied")
	private Date paymentDate;
	
	@Override
	public String toString() {
		return "Payment [id=" + id + ", cardno=" + cardNo + ", nameOnCard=" + nameOnCard + ", amount=" + amount
				+ ", paymentDate=" + paymentDate + "]";
	}
}

