package com.app.entities;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "booking")
public class BookedPackage extends BaseEntity {
	private Integer no_of_package;
	private Double total_price;
	   @ManyToOne
	    private Booking booking;
	    @OneToOne
	    private Packagee pack;

}
