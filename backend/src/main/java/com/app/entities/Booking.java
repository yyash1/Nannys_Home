package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Booking extends BaseEntity {
	private Double packedbooked;
	//private Double totalCartPrice;
	 @OneToOne
	    private User user;
	 @OneToMany(mappedBy = "booking" ,cascade = CascadeType.ALL,orphanRemoval = true)
	    private Set<BookedPackage> bookList = new HashSet<>();
	
	public void addBooking(BookedPackage pack){
		 bookList.add(pack);
		 pack.setBooking(this);
		}

		public void removeBooking(BookedPackage pack){
		    bookList.remove(pack);
		    pack.setBooking(null);
		}
}
