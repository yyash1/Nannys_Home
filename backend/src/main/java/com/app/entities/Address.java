package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EqualsAndHashCode(callSuper = true)
	@Entity
	@Setter
	@NoArgsConstructor
	@AllArgsConstructor
	public class Address extends BaseEntity {
	@Column(nullable=false)    
	private String address;
	    private String street;
	    private String city;
	    private Long pinCode;
	    
	    
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;

	    public String getAddress1() {
	        return address;
	    }

	    public String getStreet() {
	        return street;
	    }

	    public String getCity() {
	        return city;
	    }

	    public long getPinCode() {
	        return pinCode;
	    }

	    @JsonBackReference
	    public User getUser() {
	        return user;
	    }
}
