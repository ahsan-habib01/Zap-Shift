import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from './../../Hooks/useAuth';

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionDuplicate = serviceCenters.map(c => c.region);
  const regions = [...new Set(regionDuplicate)];
  // explore useMemo useCallback
  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' });

  const districtsByRegion = region => {
    const regionDistricts = serviceCenters.filter(c => c.region === region);
    const districts = regionDistricts.map(d => d.district);
    return districts;
  };

  const handleSendParcel = data => {
    console.log(data);

    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log('cost', cost);

    Swal.fire({
      title: 'Agree with the Cost?',
      text: `You will be charged ${cost} taka!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'I agree!',
    }).then(result => {
      if (result.isConfirmed) {
        // save the parcel info to the database
        axiosSecure.post('/parcels', data).then(res => {
          console.log('after saving parcel', res.data);
        });

        // Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        // });
      }
    });
  };

  return (
    <div className="mx-2">
      <h2 className="text-5xl font-bold mt-3">Send A Parcel</h2>
      <div className="divider"></div>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-5 p-3 text-black"
      >
        {/* parcel type  */}
        <div>
          <h3 className="text-3xl text-secondary font-semibold mb-5">
            Enter Your Parcel Details
          </h3>
          <label className="label mr-3">
            <input
              type="radio"
              {...register('parcelType')}
              value="document"
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register('parcelType')}
              value="non-document"
              className="radio radio-success"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-25 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register('parcelName')}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="number"
              {...register('parcelWeight')}
              className="input w-full"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
          {/* sender details */}
          <fieldset className="fieldset space-y-3">
            <h3 className="text-2xl text-secondary font-semibold">
              Sender Details
            </h3>
            {/*Sender Name */}
            <div>
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register('senderName')}
                className="input w-full"
                placeholder="Sender Name"
              />
            </div>
            {/*Sender Email */}
            <div>
              <label className="label">Sender Email</label>
              <input
                type="text"
                {...register('senderEmail')}
                className="input w-full"
                placeholder="Sender Email"
              />
            </div>

            {/* Sender Regions */}
            <div>
              <legend className="fieldset-legend">Sender Regions</legend>
              <select
                defaultValue="Pick a Region"
                {...register('senderRegion')}
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Sender District */}
            <div>
              <legend className="fieldset-legend">Sender District</legend>
              <select
                defaultValue="Pick a District"
                {...register('senderDistrict')}
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* Sender Address */}
            <div>
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register('senderAddress')}
                className="input w-full"
                placeholder="Sender Address"
              />
            </div>
          </fieldset>

          {/* receiver info */}
          <fieldset className="fieldset space-y-3">
            <h3 className="text-2xl text-secondary font-semibold">
              Receiver Details
            </h3>
            {/*Receiver Name */}
            <div>
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register('receiverName')}
                className="input w-full"
                placeholder="Receiver Name"
              />
            </div>
            {/*Receiver Email */}
            <div>
              <label className="label">Receiver Email</label>
              <input
                type="text"
                {...register('receiverEmail')}
                className="input w-full"
                placeholder="Receiver Email"
              />
            </div>

            {/* Receiver Regions */}
            <div>
              <legend className="fieldset-legend">Receiver Regions</legend>
              <select
                defaultValue="Pick a Region"
                {...register('receiverRegion')}
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/*Receiver District */}
            <div>
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                defaultValue="Pick a District"
                {...register('receiverDistrict')}
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/*Receiver Address */}
            <div>
              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register('receiverAddress')}
                className="input w-full"
                placeholder="Receiver Address"
              />
            </div>
          </fieldset>
        </div>

        <button className="btn btn-primary text-black mt-4">Send Parcel</button>
      </form>
    </div>
  );
};

export default SendParcel;
